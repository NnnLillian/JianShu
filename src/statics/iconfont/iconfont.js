import { createGlobalStyle } from 'styled-components'

export const IconFontGlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1576483618702'); /* IE9 */
  src: url('./iconfont.eot?t=1576483618702#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAREAAsAAAAACHAAAAP4AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqEFINyATYCJAMUCwwABCAFhG0HSRt3B8gOJUHxwKBgwGBlPPy33//2mTlX/rwvnjCx1UmaRRslkfihIY2SoGRW9069Q23qQVIjc2FmFXcg7TRypDQCJVfXmejP5FVxmJi+ageX09YSmAeUy/9u0hqDFgYYBxTYGJMDCbhAAtQAuAfsagLnCTQ7LIXdi4xPB/aSNi0QbzmDBtjHjLKkMoxCn7M2xRawMZb3eAsAPrifj3/ANewpukqbe/95hB4E/wQffBUVQxVW2AxA9GcHs4mKY4AkXuc6n1L4yWMUmpSvdAkw6oMKP7EPYz74Dk0ED5Br+Ys3ahqKFCrR03TzyL2VSn4Ck9hJAvE8/RjUSut9Ue9c2d2ahhFfAP9pkn32DEXI3VNGLbC331AVD2NuSU09IKjofWitHLRzItXTky5JtCwzvb0pDF5M35exSkmqcGByTxXV2ataKydRp9ferhSlSua2vLaNpqJtfZNUvFNK33FgLuXbVum+w369XePkj8y2d3pyp8wcf8vsObpAlukD8kjiwbB0wqjKyNwxg9g3Sa25rloLQIv2nWhqwyoZppJo8qeunQIVX1Vr72PYldHbfJC1RXAsM6RqtaNQJlVnCMvK5rewhsQwn9BDsavApfzyRXFJv/PL50tKGuy42VBY6A38t8a/e+c8LycwwbvRZGry2YP3UnyuC4/oJu+EwJx5infvRznNcfw+NoV6kZJu0C8UQJqYtEiXgzhY7FcsAsFVeaQy5mzYpsxN2hH1qUHR0N/31b2X+P/K8jjIePZpX8v8lMxmz4otSb71mzyp4+DalLx5vjHNTU8tBHfYqM6F4Z1wxJD2rpQdmEThoVouUFb2BVrRQ28nzOa2I7+I5oavVMUF+75bxaDmyeP7psz7PW8GKAAwra2H8RZXdqk+VWTIbqeyPokM1TuKf+A7tn38lLB6pP9/+1mCH9NXzEbTtLY+8SIJiXjjDQmY+jNZSjN1KbaauOjqnIqEFV4w9aazrHrRj2GjdjlhtBFCMdgO1WgfM7nHoDNzDnqjm9AcFbV5Zo1IIXIOR9QChGUXoVj0DaplrczkPofOpu/QWw4FNA9i7J4zB4IjwkSoQVBPagtJTsdbWMOCCK8yFRpyTRoxSrlSGopWLkK6ODonM1HQAsU+FljzDK4IsSQr8mYyEi6DJhNPCiKfDXXIMQshwdfJic17kqOONwPCXSJIA4H0SFqFSBwdngVrd0eI1PtTQQa5TDTEkraSKg0SWXH9k1w4cq7BjNJZarWdy2CrPAauEIQlJ7FEPDNSJNohk57kkYT8UdkgHcRRVou4wJcT0Ymtq3Mc32C+xj3QaIu7KFEjo4ve8E7gLHt+lK0VakRdlm2+yCHoogjRuAAA') format('woff2'),
  url('./iconfont.woff?t=1576483618702') format('woff'),
  url('./iconfont.ttf?t=1576483618702') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1576483618702#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconspinner:before {
    content: "\e612";
  }

  .iconsearch:before {
    content: "\e600";
  }
  
  .iconwrite1:before {
    content: "\e63a";
  }
  
  .iconAa1:before {
    content: "\e601";
  }


`
