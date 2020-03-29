import * as React from 'react';
import { Link } from 'react-router-dom';
import { labRoutes } from '../lab-ittyni/src/routes';

interface IDockProps {
  username : string
  closeOpenSide : ()=>void
}

const Dock: React.FunctionComponent<IDockProps> = ({username, closeOpenSide}) => {
  return(
    <>
    <button onClick={closeOpenSide}
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none'
      }}>
      <Link to={`/admin/${username}/profile`} >
        <svg width={30} height={30} viewBox="0 0 482.9 482.9" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path style={{ fillRule: 'evenodd' }} fill="rgb(97, 97, 97)" d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
            c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
            c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
             M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
            c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
            c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"/>
          <path fill="rgb(97, 97, 97)" style={{ fillRule: 'evenodd' }} d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
                    c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
                    c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
                    c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
                    c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
                    c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
                    c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
                    C447,415.5,446.9,388.8,446.8,383.6z"/>
        </svg>
      </Link>
    </button>
    <button
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none'
      }}>
      <svg width={30} height={30} viewBox="-19 -84 610.66669 610" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="m285.933594 217.410156c39.417968 0 71.375-31.953125 71.375-71.371094 0-39.417968-31.957032-71.375-71.375-71.375-39.417969 0-71.371094 31.957032-71.371094 71.375.042969 39.398438 31.96875 71.328126 71.371094 71.371094zm0-120.246094c26.992187 0 48.875 21.882813 48.875 48.875 0 26.992188-21.882813 48.871094-48.875 48.871094-26.992188 0-48.871094-21.878906-48.871094-48.871094.027344-26.980468 21.886719-48.847656 48.871094-48.875zm0 0" />
        <path d="m472.640625 184.785156h-30.375c-39.800781 0-75.789063 24.019532-91.921875 59.859375-14.996094-8.546875-31.960938-13.039062-49.21875-13.023437h-30.375c-17.175781-.015625-34.0625 4.433594-49 12.898437-16.117188-36.160156-51.921875-59.53125-91.511719-59.730469h-30.371093c-55.132813.058594-99.804688 44.730469-99.867188 99.859376v95.808593c0 6.21875 5.039062 11.25 11.25 11.25h159.640625v35.585938c0 6.21875 5.03125 11.25 11.25 11.25h207.589844c6.210937 0 11.25-5.03125 11.25-11.25v-35.585938h160.269531c6.210938 0 11.25-5.039062 11.25-11.25v-95.808593c-.0625-55.128907-44.730469-99.800782-99.859375-99.863282zm0 22.5c.5625 0 1.113281.035156 1.671875.042969l-13.574219 58.234375c-.527343 2.605469-2.652343 4.59375-5.292969 4.941406-.152343.007813-.347656.007813-.453124.011719-2.835938-.15625-5.195313-2.210937-5.742188-4.992187l-13.5-57.957032c2.15625-.183594 4.328125-.277344 6.519531-.28125zm-171.515625 46.835938c2.058594 0 4.09375.105468 6.109375.261718l-18.484375 60.234376-18.5625-60.480469c.1875 0 .367188-.015625.554688-.015625zm-170.890625-46.835938c.765625 0 1.523437.027344 2.285156.046875l-18.769531 68.21875-18.734375-68.101562c1.601563-.097657 3.21875-.164063 4.84375-.164063zm-107.734375 77.363282c.039062-32.339844 20.15625-61.25 50.460938-72.53125l29.539062 107.363281v49.726562h-80zm102.5 84.558593v-49.726562l29.75-108.144531c22.304688 7.570312 40.035156 24.765624 48.28125 46.832031-20.496094 18.867187-32.15625 45.453125-32.148438 73.3125v37.726562zm68.390625-37.722656c.039063-33.84375 22.035156-63.746094 54.335937-73.863281l29.773438 97.027344v61.394531h-84.109375zm185.089844 84.558594h-78.480469v-61.394531l29.222656-95.21875c29.675782 11.601562 49.21875 40.1875 49.257813 72.050781zm-9.480469-157.71875c7.894531-20.808594 24.167969-37.347657 44.851562-45.582031l13.492188 57.886718c2.007812 8.886719 8.085938 16.304688 16.40625 20.019532v78.566406h-42.769531v-37.734375c.011719-27.78125-11.585938-54.296875-31.980469-73.15625zm181 110.878906h-83.75v-78.589844c8.273438-3.734375 14.335938-11.105469 16.398438-19.945312l13.890624-59.589844c31.851563 10.386719 53.417969 40.070313 53.460938 73.570313zm0 0" />
        <path d="m456.820312 171.210938c32.300782.007812 60.582032-21.679688 68.945313-52.886719 8.359375-31.199219-5.289063-64.125-33.265625-80.269531v-10.804688c0-17.261719-13.988281-31.25-31.25-31.25s-31.25 13.988281-31.25 31.25v6.457031c-31.640625 12.832031-49.761719 46.28125-43.222656 79.792969 6.539062 33.515625 35.898437 57.707031 70.042968 57.707031zm0-22.5c-20.390624-.023438-38.625-12.6875-45.785156-31.777344 9.023438-1.527344 17.835938-4.117188 26.261719-7.707032 10.445313-4.457031 20.082031-10.628906 28.5-18.265624 7.96875 8.929687 20.414063 19.574218 37.351563 24.707031-6.617188 19.917969-25.34375 33.273437-46.328126 33.042969zm48.320313-56.222657c-11.164063-4.632812-19.40625-12.664062-24.457031-18.761719 2.5625-3.789062 4.863281-7.746093 6.890625-11.84375 9.464843 7.65625 15.730469 18.574219 17.566406 30.605469zm-52.640625-65.238281c0-4.832031 3.914062-8.75 8.75-8.75s8.75 3.917969 8.75 8.75v2.445312c-4.34375-.820312-8.757812-1.234374-13.179688-1.238281-1.449218 0-2.890624.058594-4.320312.140625zm4.320312 23.707031c3.527344.003907 7.046876.386719 10.488282 1.148438-15.300782 30.597656-43.402344 39.792969-59.089844 42.550781 2.675781-24.832031 23.621094-43.664062 48.601562-43.699219zm0 0" />
        <path d="m115.046875 171.210938c39.269531 0 70.625-31.261719 71.375-71.164063 0-.070313 0-.144531 0-.214844 0-39.417969-31.953125-71.371093-71.375-71.371093-39.417969 0-71.375 31.953124-71.375 71.371093 0 39.421875 31.957031 71.378907 71.375 71.378907zm0-120.25c26.941406.035156 48.785156 21.832031 48.875 48.769531-.570313 27.476562-22.023437 48.984375-48.875 48.984375-26.992187 0-48.875-21.882813-48.875-48.875 0-26.992188 21.882813-48.878906 48.875-48.878906zm0 0" />
        <path d="m517.5 268.5h-21.25c-6.210938 0-11.25 5.039062-11.25 11.25s5.039062 11.25 11.25 11.25h21.25c6.210938 0 11.25-5.039062 11.25-11.25s-5.039062-11.25-11.25-11.25zm0 0" />
        <path d="m330 318.5c-6.210938 0-11.25 5.039062-11.25 11.25s5.039062 11.25 11.25 11.25h21.25c6.210938 0 11.25-5.039062 11.25-11.25s-5.039062-11.25-11.25-11.25zm0 0" />
        <path d="m180 276c0-6.210938-5.039062-11.25-11.25-11.25h-16.25c-6.210938 0-11.25 5.039062-11.25 11.25s5.039062 11.25 11.25 11.25h16.25c6.210938 0 11.25-5.039062 11.25-11.25zm0 0" />
      </svg>
    </button>
    <button 
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none',
        textAlign: "center"
      }}>
      <svg width={30} height={30} viewBox="0 0 64 64" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="m63 11.586-10.586-10.586h-27.414v8h-5c-2.757 0-5 2.243-5 5v16.586l-5.348 5.348c-1.037 1.037-1.713 2.351-1.955 3.799l-.631 3.787-1.066 1.066-1-1-4.414 4.414 13.414 13.414 1.42-1.42c.773 1.766 2.532 3.006 4.58 3.006h28c2.757 0 5-2.243 5-5v-5h10zm-10-7.172 6.586 6.586h-6.586zm-33 6.586h5v6h-5c-1.654 0-3-1.346-3-3s1.346-3 3-3zm-2.293 22.879c-.237.239-.707.045-.707-.293v-15.612c.838.635 1.87 1.026 3 1.026h1v11.586zm-8.773 10.601.736-4.419c.173-1.034.655-1.973 1.396-2.714l3.934-3.933v.172c0 1.331 1.083 2.414 2.414 2.414.636 0 1.258-.258 1.707-.707l5.965-5.965c.209-.208.498-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.116.581-.328.793l-8.379 8.379 1.414 1.414 8.379-8.379 2-2c.209-.208.498-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .3-.116.581-.328.793l-2 2-8.379 8.379 1.414 1.414 8.379-8.379c.209-.209.498-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .295-.119.584-.328.793l-2 2-6.379 6.379 1.414 1.414 6.379-6.379c.209-.209.498-.328.793-.328.618 0 1.121.503 1.121 1.121 0 .295-.119.584-.328.793l-8.02 8.02c-.741.741-1.68 1.224-2.713 1.396l-4.42.736-2.519 2.52-8.586-8.586zm-5.52 3.52 1.586-1.586 10.586 10.586-1.586 1.586zm13.624 10.376 1.376-1.376-1-1 2.066-2.066 1.52-.253v7.319h-1c-1.526 0-2.775-1.149-2.962-2.624zm33.962-.376c0 1.654-1.346 3-3 3h-25v-7.653l.269-.045c1.447-.242 2.761-.918 3.798-1.955l8.02-8.02c.58-.58.913-1.384.913-2.206 0-1.273-.769-2.368-1.865-2.853.547-.576.865-1.35.865-2.147 0-1.273-.769-2.368-1.865-2.852.555-.583.865-1.34.865-2.148 0-1.721-1.4-3.121-3.121-3.121-.796 0-1.571.318-2.147.865-.485-1.096-1.58-1.865-2.853-1.865-.822 0-1.626.333-2.207.914l-.672.672v-9.586h21c1.654 0 3 1.346 3 3v10.5l4 3zm-2-26.5v-8.5h8v24h-4v-12.5zm4 19.5v-2h6v-28h-10.101c-.465-2.279-2.484-4-4.899-4h-17v-14h24v10h10v38z" />
        <path d="m45 53c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm2 4h-2l-.002-2h.002 2z" />
        <path d="m39 53h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm0 4h-2l-.002-2h.002 2z" />
        <path d="m29 5h20v2h-20z" />
        <path d="m29 9h20v2h-20z" />
        <path d="m29 13h20v2h-20z" />
        <path d="m57 17h2v2h-2z" />
        <path d="m53 17h2v2h-2z" />
        <path d="m49 17h2v2h-2z" />
        <path d="m25 21h2v2h-2z" />
        <path d="m29 21h2v2h-2z" />
        <path d="m33 21h2v2h-2z" />
      </svg>
    </button>
    <button onClick={closeOpenSide}
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none',
        textAlign: "center"
      }}>
      <Link to={`/admin/${username}/lab/labtests`}>
      <svg width={30} height={30} viewBox="-74 0 512 512" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="m361.414062 443.589844-108.269531-263.902344c-6.003906-14.640625-9.050781-30.085938-9.050781-45.910156v-69.757813c0-7.511719 2.925781-14.574219 8.238281-19.886719 6.476563-6.476562 10.046875-15.089843 10.046875-24.25v-9.882812c0-5.523438-4.480468-10-10-10h-139.621094c-5.523437 0-10 4.476562-10 10v9.882812c0 9.160157 3.566407 17.773438 10.042969 24.25 5.3125 5.3125 8.238281 12.375 8.238281 19.890626v69.753906c0 15.824218-3.042968 31.269531-9.050781 45.910156l-29.75 72.515625c-.011719.027344-.023437.054687-.035156.082031l-78.484375 191.304688c-6.285156 15.324218-4.53125 32.6875 4.695312 46.441406 9.226563 13.757812 24.621094 21.96875 41.183594 21.96875h265.9375c16.5625 0 31.960938-8.210938 41.1875-21.96875 9.222656-13.757812 10.976563-31.117188 4.691406-46.441406zm-230.921874-256.3125c7-17.058594 10.546874-35.058594 10.546874-53.5v-69.757813c0-12.851562-5.003906-24.9375-14.09375-34.027343-2.671874-2.671876-4.15625-6.21875-4.1875-9.992188h119.621094c-.03125 3.773438-1.515625 7.316406-4.191406 9.992188-9.085938 9.089843-14.09375 21.171874-14.09375 34.027343v69.753907c0 18.441406 3.550781 36.441406 10.546875 53.5l24.144531 58.851562h-152.4375zm209.617187 291.613281c-5.585937 8.332031-14.542969 13.109375-24.574219 13.109375h-265.9375c-10.027344 0-18.984375-4.777344-24.574218-13.109375-4.214844-6.285156-5.824219-13.574219-4.730469-20.761719h16.476562c5.519531 0 10-4.480468 10-10 0-5.523437-4.480469-10-10-10h-9.1875l11.484375-28h16.867188c5.523437 0 10-4.480468 10-10 0-5.523437-4.476563-10-10-10h-8.660156l11.484374-28h17.34375c5.523438 0 10-4.480468 10-10 0-5.523437-4.476562-10-10-10h-9.136718l11.488281-28h17.8125c5.523437 0 10-4.480468 10-10 0-5.523437-4.476563-10-10-10h-9.609375l11.488281-28h168.84375l75.921875 185.054688c3.804688 9.277344 2.785156 19.378906-2.800781 27.707031zm0 0" />
        <path d="m312.03125 444.214844c-2.09375-5.113282-7.929688-7.558594-13.042969-5.46875-5.109375 2.09375-7.558593 7.929687-5.46875 13.042968l.054688.125c1.585937 3.871094 5.316406 6.214844 9.257812 6.214844 1.261719 0 2.542969-.238281 3.785157-.746094 5.109374-2.09375 7.558593-7.933593 5.464843-13.042968zm0 0" />
        <path d="m297.898438 409.761719-35.8125-87.289063c-2.09375-5.109375-7.933594-7.554687-13.046876-5.457031-5.109374 2.09375-7.550781 7.9375-5.457031 13.046875l35.8125 87.289062c1.585938 3.871094 5.316407 6.207032 9.257813 6.207032 1.261718 0 2.546875-.238282 3.789062-.75 5.109375-2.09375 7.554688-7.9375 5.457032-13.046875zm0 0" />
      </svg>
      </Link>
    </button>

    <button
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none',
        textAlign: "center"
      }}>
      <svg width={30} height={30} viewBox="0 0 64 64" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="m62 57h-1v-45c0-.553-.447-1-1-1h-11v-9c0-.553-.447-1-1-1h-32c-.553 0-1 .447-1 1v9h-11c-.553 0-1 .447-1 1v45h-1c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1h60c.553 0 1-.447 1-1v-4c0-.553-.447-1-1-1zm-9 0v-2h6v2zm6-24h-12v-10h12zm-14 0h-12v-10h12zm-14 0h-12v-10h12zm-14 0h-12v-10h12zm42 2v18h-6v-1c0-3.859-3.141-7-7-7s-7 3.141-7 7v1h-14v-1c0-3.859-3.141-7-7-7s-7 3.141-7 7v1h-6v-18zm-46 17c0-2.757 2.243-5 5-5s5 2.243 5 5v5h-10zm12 3h14v2h-14zm16-3c0-2.757 2.243-5 5-5s5 2.243 5 5v5h-10zm-24-49h30v14h-30zm-2 10v5c0 .553.447 1 1 1h32c.553 0 1-.447 1-1v-5h10v8h-54v-8zm-10 42h6v2h-6zm56 6h-58v-2h58z" />
        <path d="m21 5h-2v9c0 .553.447 1 1 1h5v-2h-4z" />
        <path d="m31 5c-2.206 0-4 1.794-4 4v6h2v-2h4v2h2v-6c0-2.206-1.794-4-4-4zm-2 6v-2c0-1.103.897-2 2-2s2 .897 2 2v2z" />
        <path d="m42 5h-4c-.553 0-1 .447-1 1v4 4c0 .553.447 1 1 1h4c1.654 0 3-1.346 3-3 0-.771-.301-1.468-.78-2 .479-.532.78-1.229.78-2 0-1.654-1.346-3-3-3zm-3 2h3c.552 0 1 .448 1 1s-.448 1-1 1h-3zm3 6h-3v-2h3c.552 0 1 .448 1 1s-.448 1-1 1z" />
        <path d="m12 43h12c.553 0 1-.447 1-1v-4c0-.553-.447-1-1-1h-12c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1zm1-4h10v2h-10z" />
        <path d="m40 43h12c.553 0 1-.447 1-1v-4c0-.553-.447-1-1-1h-12c-.553 0-1 .447-1 1v4c0 .553.447 1 1 1zm1-4h10v2h-10z" />
      </svg>
    </button>

  </>
  );
};

export default Dock;
