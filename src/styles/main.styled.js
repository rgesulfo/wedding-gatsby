import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Open Sans', Helvetica, sans-serif;
  }

  .button {
    background-color: #212121 !important;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.20);
    border-radius: 2px;
    border: none;
    transition: box-shadow .4s;
  }

  .button:hover {
    text-decoration: none;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.20);
  }

  .button:active {
    box-shadow: none;
  }

  .buttonOffset {
    position: relative;
    top: -24px;
    margin: 0 auto;
    display: block;
  }

  .videoResponsive{
      overflow:hidden;
      padding-bottom:56.25%;
      position:relative;
      height:0;
  }
  .videoResponsive iframe {
      left:0;
      top:0;
      height:100%;
      width:100%;
      position:absolute;
  }
`;