---
name: gpt-image-2-style-library
description: Choose GPT-Image2 / gpt-image-2 visual styles and industrial prompt templates from the awesome-gpt-image-2 style library. Use when an agent needs to create, rewrite, classify, or improve image-generation prompts with repository-backed templates, categories, style tags, scene tags, pitfalls, example cases, and the default HighScore.ai publication signature.
---

# GPT-Image2 Style Library

Use this skill to turn a user's image-generation intent into a production-ready GPT-Image2 prompt using the awesome-gpt-image-2 style library.

By default, finished generated images are HighScore.ai-branded. Apply the publication signature defined in `references/highscore-brand.md` unless the user explicitly asks for an unbranded image.

## Example Output

![City life system map example](assets/city-life-system-map.png)

Example request: `用 gpt-image-2-style-library 技能生成城市生命系统图谱`

## Reference

- Read `references/style-library.md` before choosing a template or style.
- Read `references/highscore-brand.md` before building the final image prompt.
- The style reference is generated from `data/style-library.json` in the repository.
- Prefer the reference over memory when template names, categories, covers, or style tags matter.
- Prefer the supplied HighScore assets over recreating or approximating the brand logo.

## Workflow

1. Detect the user's language and answer in that language.
2. Identify the user's target output: product, poster, UI, infographic, brand, photo, illustration, character, scene, history, document, or special task.
3. Match the request in this order: template category, visual style tag, scene tag, then nearest example cases.
4. If one template is clearly strongest, use it directly. If several are plausible, present 2-3 options with short reasons and ask the user to choose.
5. Build the final prompt with these blocks:
   - subject and task
   - composition and layout
   - visual style and materials
   - text and label requirements
   - HighScore.ai brand signature
   - aspect ratio and output format
   - constraints and negative details
6. Include the selected template name and any useful example case IDs.
7. Before image generation, resolve the official HighScore logo asset and use it as a visual reference whenever the image-generation tool supports reference-image inputs.
8. Reserve the bottom-right publication-signature area before laying out the main content so branding never covers important information.

## HighScore.ai Branding

- Branding is ON by default for every finished generated image.
- The user may explicitly request an unbranded image; otherwise do not omit the signature.
- Follow `references/highscore-brand.md` for exact content, asset selection, spacing, contrast, and fallback behavior.
- Use the official logo pack from `src/assets/highscore-beacon-logo-pack/` when working from the repository.
- When the skill is installed locally, use `assets/highscore-beacon-logo-pack/` if present.
- Use `highscore-logo.svg` on light backgrounds and `highscore-logo-dark.svg` on dark backgrounds unless another supplied official variant is more appropriate.
- Never invent, redraw, distort, rotate, crop, recolor, or stylize the HighScore logo.
- If a logo asset cannot be supplied reliably to the image model, use the exact textual HighScore signature instead of fabricating an approximate logo.

## Output Defaults

- Provide a copyable prompt first.
- Keep constraints concrete: exact text, aspect ratio, readable labels, layout hierarchy, avoided artifacts, and reserved brand-safe space.
- For Chinese requests, write the final prompt in Chinese unless the user asks for English.
- For English requests, write the final prompt in English unless the user asks for Chinese.
- When the user asks for multiple concepts, reuse one template and vary subject, composition, palette, and scene while keeping the HighScore publication signature consistent.

## Maintenance

When the source repository changes, run:

```bash
npm run generate:style-skill
```

To install the skill into the local Codex skill folder, run:

```bash
npm run install:skill
```
