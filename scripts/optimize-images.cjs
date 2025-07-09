// @ts-check
const sharp = require("sharp");
const fs = require("node:fs");
const path = require("node:path");

const assetsDir = path.join(__dirname, "..", "public", "assets");
const outputDir = path.join(__dirname, "..", "public", "assets", "optimized");

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

/**
 * @param {string} inputPath
 * @param {string} outputPath
 */
async function optimizeImage(inputPath, outputPath) {
	try {
		const image = sharp(inputPath);
		const metadata = await image.metadata();

		console.log(`Processing ${path.basename(inputPath)}...`);

		// Convert to WebP with optimization
		await image
			.webp({
				quality: 85,
				effort: 6,
			})
			.toFile(outputPath.replace(path.extname(outputPath), ".webp"));

		// Also create a smaller version for thumbnails
		await image
			.resize(400, 400, {
				fit: "inside",
				withoutEnlargement: true,
			})
			.webp({
				quality: 80,
				effort: 6,
			})
			.toFile(outputPath.replace(path.extname(outputPath), "-thumb.webp"));

		console.log(`✓ Optimized ${path.basename(inputPath)}`);
	} catch (error) {
		console.error(`❌ Error processing ${path.basename(inputPath)}:`, error);
	}
}

async function optimizeAllImages() {
	const files = fs.readdirSync(assetsDir);

	for (const file of files) {
		const inputPath = path.join(assetsDir, file);
		const outputPath = path.join(outputDir, file);

		// Skip if it's a directory or already optimized
		if (fs.statSync(inputPath).isDirectory() || file.startsWith("optimized")) {
			continue;
		}

		// Process image files
		if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
			await optimizeImage(inputPath, outputPath);
		}
	}

	console.log("✓ All images optimized!");
}

optimizeAllImages();
