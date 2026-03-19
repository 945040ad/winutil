import os
import re

def fix_json_newlines(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # We need to find strings and specifically replace physical newlines inside them with \n
    # A regex to match strings is tricky but we can try to find values between quotes
    
    in_string = False
    escape = False
    new_content = []
    
    for char in content:
        if in_string:
            if escape:
                new_content.append(char)
                escape = False
            elif char == '\\':
                new_content.append(char)
                escape = True
            elif char == '"':
                in_string = False
                new_content.append(char)
            elif char == '\n':
                new_content.append('\\n')
            elif char == '\r':
                pass # skip
            else:
                new_content.append(char)
        else:
            if char == '"':
                in_string = True
            new_content.append(char)
            
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write("".join(new_content))

config_dir = "Config"
for filename in os.listdir(config_dir):
    if filename.endswith(".json"):
        filepath = os.path.join(config_dir, filename)
        fix_json_newlines(filepath)
        print(f"Fixed {filepath}")
