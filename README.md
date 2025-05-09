# Clean LLM JSON

A tiny utility to **clean and parse messy JSON** outputs from LLMs (Large Language Models) like ChatGPT, Claude, or Gemini.

These models often wrap JSON in extra formatting like triple backticks or `"```json\n{...}\n```"`, which breaks `JSON.parse()`. This package strips the noise and gives you a usable JavaScript object.

---

## 🚀 Installation

```bash
npm install cleanllmjson
```

---

## 🔧 Usage

````js
import { cleanJSON } from 'cleanjson';

// Example with LLM-formatted JSON string
const input = "```json\n{\n  \"name\": \"Ali\",\n  \"age\": 22\n}\n```";
const result = cleanJSON(input);

console.log(result);
// Output: { name: 'Ali', age: 22 }
````

It also works with regular JSON strings and even plain objects (it just returns them as-is).

---

## 📦 What It Does

* Trims leading/trailing spaces and newlines
* Removes triple backtick formatting (`json ... `)
* Safely parses JSON
* Returns `null` if parsing fails

---

## 🧪 Example

```js
cleanJSON(`{
  "success": true,
  "data": [1, 2, 3]
}`);

// → { success: true, data: [1, 2, 3] }
```

---

## ⚠️ Note

* Only use with **trusted** inputs. Don’t run `cleanJSON()` on unverified data from users without additional validation.
* If parsing fails, it logs the error and returns `null`.

---

## 📄 License

MIT © [captainAlpha04](https://github.com/CaptainAlpha04)

---

Would you like me to auto-generate this file and save it for publishing, or modify any section?
