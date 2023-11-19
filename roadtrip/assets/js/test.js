//const API_KEY = "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"
const API_KEY = "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"
//const submitIcon = document.querySelector("myButton")
const inputElement = document.querySelector('input')
const imageSection = document.querySelector('.images-section')

var button = document.querySelector("#button1")

const getImages = async () => {
	const options = {
		method: "POST",
		headers: {
			"Authorization": 'Bearer ${API_KEY}',
			'Content-Type': "application/json"
		},
		body: JSON.stringify({
			"prompt": "Dark and mysterious forest",
			"n": 1,
			"size": "1024x1024"
		})
	}
	try {
		const response = await fetch('https://api.openai.com/v1/images/generations', options)
		const data = await response.json()
		console.log(data)
        

			const ImageContainer = document.createElement('div')
			ImageContainer.classList.add('image-container')
			const imageElement = document.createElement('img')
			imageElement.setAttribute('src', imageObject.url)
			ImageContainer.append(imageELement)
			imageSection.append(ImageContainer)
			console.log("working")
		
	} catch (error) {
		console.error(error)
	}
}

//var tempImage = document.querySelector("#tempImage")

button.addEventListener('click', function () {
	console.log("working")
})



