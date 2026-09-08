# HighScore.ai Brand Signature

Apply this brand signature to every generated infographic, diagram, educational graphic, poster, social visual, and other finished image unless the user explicitly asks for an unbranded image.

## Brand identity

- Brand: `HighScore.ai`
- Website text: `highscore.ai`
- Descriptor: `Free AI Certificate Courses Directory`
- X handle: `@HighScore_AI`
- Text-only X signature: `𝕏 @HighScore_AI`
- Canonical public logo source: `https://www.highscore.ai/brand/highscore-mark.svg`

## Repository assets

Canonical source logo pack in this repository:

`src/assets/highscore-beacon-logo-pack/`

Preferred files:

- Light-background horizontal logo: `src/assets/highscore-beacon-logo-pack/highscore-logo.svg`
- Dark-background horizontal logo: `src/assets/highscore-beacon-logo-pack/highscore-logo-dark.svg`
- Standalone mark: `src/assets/highscore-beacon-logo-pack/highscore-mark-1024.png`

When the skill is installed locally with `npm run install:skill`, the logo pack is copied to:

`assets/highscore-beacon-logo-pack/`

Use the installed local asset path when available.

## Mandatory signature content

Every branded output must reserve a small publication-signature area at the bottom-right corner containing:

1. the official HighScore logo or mark;
2. `highscore.ai`;
3. `Free AI Certificate Courses Directory` when space permits;
4. the X account rendered as `𝕏 @HighScore_AI`.

The website and X handle must be spelled exactly. Do not invent alternate domains, handles, slogans, or logo shapes.

## X / social signature

- Preferred text treatment: `𝕏 @HighScore_AI`.
- `𝕏` is a typographic Unicode fallback used to visually identify the X account when no official X logo asset is supplied.
- Keep the `𝕏` symbol and handle on one line when space permits.
- Keep the social signature smaller than the HighScore logo and website.
- Do not use the legacy Twitter bird icon or the word `Twitter`.
- Do not invent an X logo asset. If an official X brand asset is supplied in the future, prefer that asset over the typographic fallback.

## Placement and sizing

- Place the signature at the bottom-right corner.
- Keep approximately 3% safe margin from the right and bottom edges.
- Keep the complete signature visually secondary to the main diagram or artwork.
- As a default, keep the signature block within roughly 18% of the image width.
- Do not overlap primary content, labels, legends, charts, faces, or focal objects.
- Maintain clear whitespace around the signature.
- Keep the logo aspect ratio unchanged.
- Do not rotate, stretch, crop, redraw, recolor, or stylize the supplied logo.

## Contrast

- On light backgrounds, prefer `highscore-logo.svg`.
- On dark backgrounds, prefer `highscore-logo-dark.svg`.
- If the horizontal logo would be too small to remain legible, use the standalone mark plus the exact text signature.
- Ensure sufficient contrast without adding a visually dominant badge or advertising panel.

## Image-generation behavior

When the image-generation tool supports reference-image inputs, use the supplied HighScore logo asset as a visual reference rather than asking the model to invent the logo from a text description.

If repository assets cannot be attached directly:

1. retrieve the official asset from the repository or canonical public logo URL when tooling permits;
2. use it as a reference input when possible;
3. if no visual asset can be supplied reliably, render the exact textual signature (`highscore.ai`, `Free AI Certificate Courses Directory`, `𝕏 @HighScore_AI`) and do not fabricate an approximate HighScore logo.

## Prompt block

Include a dedicated block equivalent to the following in the final image prompt:

```text
HIGHSCORE.AI BRAND SIGNATURE
Reserve a clean publication signature in the bottom-right corner, about 3% from the right and bottom edges and no more than roughly 18% of image width. Use the supplied official HighScore logo asset with correct proportions and the appropriate light/dark variant. Include the exact text “highscore.ai” and, when space permits, “Free AI Certificate Courses Directory”. Render the X account exactly as “𝕏 @HighScore_AI”, keeping it visually secondary to the HighScore logo and website. Do not use the legacy Twitter bird. Keep the signature understated, crisp, readable, and visually secondary. Do not invent, redraw, distort, crop, rotate, recolor, or stylize the HighScore logo. Do not overlap primary content.
```

## Priority

Content accuracy and readability come first. The HighScore signature should look like a publisher mark, not a major content module or advertisement.
