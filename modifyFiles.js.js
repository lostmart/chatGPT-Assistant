const fs = require("fs")
const path = require("path")

// Directory to scan
const directoryPath = path.join(__dirname, "src")

// Function to read and modify files
function modifyFiles(directory) {
	fs.readdir(directory, (err, files) => {
		if (err) throw err

		files.forEach((file) => {
			const filePath = path.join(directory, file)

			fs.readFile(filePath, "utf8", (err, data) => {
				if (err) throw err

				// Modify the file content
				let modifiedData = data.replace(/newText/g, "pelotudo")

				fs.writeFile(filePath, modifiedData, "utf8", (err) => {
					if (err) throw err
					console.log(`${file} has been modified`)
				})
			})
		})
	})
}

// modifies a readme file with some and replaces some old text with new text rpovided by the funtion

modifyFiles(directoryPath)
