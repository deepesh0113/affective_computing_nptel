#!/usr/bin/env python3
import re

file_path = r'practice.js'

# Read file
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Strategy: Find all question objects and add year field
# A question ends with },  or just } (for the last one)
# We'll use a regex to find and replace

# Count total questions first
question_count = content.count('explanation:')
print(f"Total questions: {question_count}")

# Split the questions - each one has pattern: { ... explanation: "..." }
# We need to carefully insert year: XXXX before the closing }

# Find all occurrences of explanation and the following }
pattern = r'(explanation:\s*"[^"]*")\s*(\n\s*)(})(,?)'

def replace_func(match, counter=[0]):
    counter[0] += 1
    question_num = counter[0]
    
    # Determine year: first 60 are 2025, last 60 are 2026
    if question_num <= 60:
        year = 2025
    else:
        year = 2026
    
    explanation = match.group(1)
    whitespace = match.group(2)
    closing_brace = match.group(3)
    comma = match.group(4)
    
    # Add year field before closing brace
    result = f"{explanation},\n    year: {year}\n  {closing_brace}{comma}"
    return result

# Apply replacement
modified_content = re.sub(pattern, replace_func, content)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(modified_content)

print(f"Successfully added year field to {question_count} questions")
print("Saved to practice.js")
