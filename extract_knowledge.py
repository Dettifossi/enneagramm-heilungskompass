#!/usr/bin/env python3
"""Generic extractor for data/knowledge/*.js subtype files.
Walks the file token-by-token, capturing every quoted string value that
follows a `key:` (or is a bare array item) EXCEPT for keys we know must
stay untouched (code, src, status, animal, page-id-like short codes).
Outputs a numbered batch file for translation.
"""
import re, sys, json

SKIP_KEYS = {"code", "src", "status", "animal", "blocks",
             "deId", "enCode", "enId", "biblicalId", "affirmationsId"}
# key names whose value is a "page id" like "SE1 · Seite 1" — keep as is except translate "Seite"->"Page"
STRING_RE = re.compile(r'(?P<key>[A-Za-z0-9_]+)\s*:\s*"(?P<val>(?:[^"\\]|\\.)*)"')
BARE_STRING_RE = re.compile(r'"(?P<val>(?:[^"\\]|\\.)*)"')

def unescape(s):
    return s.replace('\\"', '"').replace("\\n", "\n")

def escape(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace("\n", "\\n")

def extract(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()

    entries = []  # (start, end, original_text, key_context)
    i = 0
    n = len(content)
    # Track most recent key seen (to decide skip) for bare array strings
    last_key = None
    depth_key_stack = []
    while i < n:
        c = content[i]
        if c == '"':
            # find end of string (handle escapes)
            j = i + 1
            while j < n and content[j] != '"':
                if content[j] == '\\':
                    j += 2
                else:
                    j += 1
            raw = content[i+1:j]
            # look backwards to see if preceded by `key:` (possibly with newline/space)
            before = content[:i].rstrip()
            m = re.search(r'([A-Za-z0-9_]+)\s*:\s*$', before)
            key = m.group(1) if m else last_key
            # skip import statement paths: `from "./helpers.js"`
            is_import_path = bool(re.search(r'from\s*$', before))
            # skip bare positional args to MediaGroups(...) calls, e.g. type1MediaGroups("SE1", {
            is_mediagroups_arg = bool(re.search(r'MediaGroups\(\s*$', before))
            if (key not in SKIP_KEYS and key not in ("page",) and len(raw.strip()) > 0
                    and not is_import_path and not is_mediagroups_arg):
                # skip pure asset-path-like strings
                if not re.match(r'^(assets/|https?://|\./)', raw) and not raw.endswith((".jpg", ".jpeg", ".png", ".js")):
                    entries.append((i+1, j, raw))
            if m:
                last_key = key
            i = j + 1
        else:
            i += 1
    return content, entries

def main():
    path = sys.argv[1]
    content, entries = extract(path)
    out = []
    for idx, (s, e, raw) in enumerate(entries, 1):
        out.append(f"[{idx}] {unescape(raw)}")
    outpath = sys.argv[2] if len(sys.argv) > 2 else "/tmp/knowledge_batch.txt"
    with open(outpath, "w", encoding="utf-8") as f:
        f.write("\n".join(out))
    print(f"{len(entries)} strings extracted -> {outpath}")

if __name__ == "__main__":
    main()
