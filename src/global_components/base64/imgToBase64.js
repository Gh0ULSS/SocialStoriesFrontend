//Utility file used for encoding and decoding images to base64
//Function will encode the given image and return the base64 of the image
export const encodeBase64 = (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = (error) => reject(error);
  });
};

//Function will decode the base64 and return a blob representation of the image
export const decodeBase64 = (base64string) => {
  var decimg;

  // remove parts which are not base64
  if(base64string.includes("data:image/jpeg;base64,"))
  {
    decimg = atob(base64string.split(",")[1]);
  }
  else
  {

    decimg = atob(base64string);

    const byteArr = new Uint8Array(decimg.length);

    for (var i = 0; i < byteArr.length; i++) {
      byteArr[i] = decimg.charCodeAt(i);
    }

    let mimtype = "image/jpeg";

    //Note "/9j/" is the value for png in base64.
    if (base64string.indexOf("/9j/") === 0) {
      mimtype = "image/png";
    }

    let blob = new Blob([byteArr], { type: mimtype });
    var decimgURL = URL.createObjectURL(blob);
    return decimgURL;
  }
};
