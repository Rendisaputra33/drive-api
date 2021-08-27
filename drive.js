// const { google } = require('googleapis');
// const path = require('path');
// const fs = require('fs');
// const {
// 	CLIENT_ID,
// 	CLIENT_SECRET,
// 	REDICRECT,
// 	REFRESH_TOKEN,
// } = require('./config');

// const oauthClient = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDICRECT);

// oauthClient.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({
// 	version: 'v3',
// 	auth: oauthClient,
// });

// const file = path.join(__dirname, 'E6A3GQm.jpg');

// async function fileUpload(pathFile) {
// 	try {
// 		const response = await drive.files.create({
// 			requestBody: {
// 				name: 'coba.jpg',
// 				mimeType: 'image/jpg',
// 			},
// 			media: {
// 				mimeType: 'image/jpg',
// 				body: fs.createReadStream(pathFile),
// 			},
// 		});

// 		console.log(response.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// async function generatePublic(id) {
// 	try {
// 		const result = await drive.files.get({
// 			fileId: '1W10BXL8BT1iJZ5Cur7HYgDYCRdKaihLp',
// 			fields: 'webContentLink',
// 		});
// 		console.log(result.data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// generatePublic();

const data = function (arg) {
	return new Promise((resolve, rejects) => {
		if (arg) resolve(arg)
		rejects(false)
	})
}

console.log(data(true).then((val) => console.log(`promise resolving ${val}`)))

console.log(data(false).catch((error) => console.log(error)))
