import { Image } from "react-native";

const DeleteIcon = () => {
  return (
    <Image
      style={{
        width: 20,
        height: 20,
        marginLeft: 10,
      }}
      source={{
        uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAYFBMVEX///8AAACrq6vr6+sxMTFlZWVNTU1eXl5wcHDR0dGHh4fu7u46Ojry8vIVFRXk5OS+vr55eXmenp6Pj4/e3t5ERETX19d/f3/Ly8slJSUfHx8ODg7FxcWysrL4+PhYWFiiG7j3AAACnklEQVRoge2b63aqMBCFCSpBuQa5tNXC+79lD0dlIkk7CUm6ulyzfyZmviVxhshsoohE+vsq4kOC6BAXoejHnBkoP4ah795N6Iy974LgT2Z0xk5B8KZ0xghP+NfEd6lG3a/hG910Q/hXwGc7jTIIfy7U6eIM8/r1hvCa53udIPyHbvoD5rXLc16b0KVv4VtnnN7gUbZL+6ORVRidaLYqx05ifUg6Yz2CP4bFY+fAtgxJL1ts8w8h8QeMHlWXcPRLheKjtsPjbFOHXvr/usZB9GYEJ5GqfvQTaOwN8m2leM4Ubr9OUcXnSLHdouGWqSV2i0DV34v4YLOoflSKxHEDxuQRyeiocxdfKpVjrXhbAuHlflEGZw7LTVsrXgLlpkfNKNrt/eP35o9cCE94Pb5OJ6FkcS2mVJPa3vEZ19Sje3XhSnJ5xz8qEkcHQ+CXcsyuMHhdBtfX3zc+XWYEDIplMA2Mh7uBVMThv8H66hOe8IQnPOEJT3jCE57whCc84QlPeMITnvB/BA+WxRMyGAQP9gKpywSWh7U9wPtD1XuP67k19RhUXJr+n2jfrC0rD8zNbaMaUwI8UC8+m0/FgaIdfMV2AuEJHwwv9XANPG4/Cdx3Fj1caHuzxA0PgSaLVrzknHJ62aCAOBYNdNmxiDr8fpLkPbTZRej6M+bgXxilMDY+BOmiKb0xC0HXjV2sNlFIfCvXh6xBCiLwj0t68kxOZk6zldpJjmFpgUnkteXQWiZA0Q5PtsfJbrni2cy5zhT/nfja72r9ro5gHmW387NGj6bFbkPyVt48q+Um65c3x/BG41frh74pbWdlHva/M7/RqnL2qzvdsf4dfISDbfgi3N+Nq5puUw6UXePB7DirrRsxYa9ByppEU3tik0hB9AWUsC5NmPqY8gAAAABJRU5ErkJggg==",
      }}
    />
  );
};

export default DeleteIcon;
