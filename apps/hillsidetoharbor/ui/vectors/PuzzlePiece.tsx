import type { RemoveFields } from "@/types/helpers";
import type { FC, SVGProps } from "react";

const PuzzlePiece: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "xmlns" | "viewBox" | "fill">
> = ({ ...svg }) => (
  <svg
    {...svg}
    viewBox='0 0 139 139'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M69.1278 109.464C68.5846 109.462 68.0649 109.243 67.684 108.855L55.8923 97.0629V97.0619C55.5707 97.5255 55.2031 97.9544 54.7946 98.3434C52.8862 100.261 50.2925 101.34 47.5867 101.34C44.8817 101.34 42.2872 100.261 40.3798 98.3434C38.4611 96.4349 37.3828 93.8412 37.3828 91.1355C37.3828 88.4304 38.4611 85.836 40.3798 83.9285C40.7729 83.5242 41.2018 83.1576 41.6602 82.8309L29.8686 71.0392V71.0382C29.0803 70.2458 29.0803 68.9643 29.8686 68.1719L43.6331 54.4074C44.1334 53.905 44.8594 53.7008 45.5486 53.8662C46.2379 54.0326 46.7903 54.5452 47.0078 55.2202C47.6215 56.9571 48.9877 58.3223 50.7237 58.9371C52.4595 59.5518 54.3802 59.3486 55.9497 58.3847C57.5191 57.4207 58.5689 55.8002 58.8068 53.9735C59.0437 52.1477 58.4443 50.3117 57.173 48.9793C56.496 48.2891 55.6577 47.7785 54.7336 47.4946C54.0546 47.2792 53.5379 46.7237 53.3715 46.0314C53.2091 45.3421 53.4174 44.6182 53.9208 44.1199L67.6853 30.3554H67.6843C68.4777 29.5671 69.7582 29.5671 70.5516 30.3554L82.3433 42.1471V42.1481C82.665 41.6845 83.0326 41.2556 83.442 40.8666C86.0162 38.2883 89.7719 37.2793 93.2928 38.2199C96.8126 39.1603 99.5644 41.908 100.51 45.4268C101.455 48.9466 100.452 52.7032 97.8765 55.2815C97.4772 55.6858 97.0412 56.0534 96.5756 56.3791L108.388 68.1107C109.176 68.9041 109.176 70.1846 108.388 70.977L94.603 84.7415H94.6041C94.1058 85.2449 93.3818 85.4532 92.6925 85.2908C92.0074 85.1183 91.4611 84.6026 91.2487 83.9287C90.9485 83.0077 90.4328 82.1714 89.7446 81.4893C88.1935 79.9382 85.9339 79.3327 83.8149 79.9004C81.6961 80.4672 80.0418 82.1224 79.4743 84.2411C78.9066 86.3588 79.5121 88.6196 81.0631 90.1707C81.7534 90.8539 82.5968 91.3624 83.523 91.6544C84.1949 91.876 84.7024 92.4305 84.8647 93.1187C85.0271 93.8079 84.8198 94.5319 84.3164 95.0292L70.5519 108.773C70.1904 109.187 69.6768 109.436 69.1285 109.465L69.1278 109.464ZM55.3837 91.6336C55.9178 91.6356 56.4283 91.848 56.8072 92.2238L69.1483 104.545L79.4973 94.1956C79.0419 93.8637 78.614 93.4961 78.2158 93.0979C76.3043 91.1833 75.2322 88.5886 75.2342 85.8826C75.2353 83.1776 76.3125 80.5839 78.226 78.6725C80.1406 76.761 82.7363 75.6878 85.4413 75.6899C88.1463 75.692 90.7399 76.7682 92.6513 78.6827C93.0434 79.081 93.4039 79.5098 93.7296 79.9632L104.079 69.5938L91.7579 57.2731H91.7568C91.2534 56.7758 91.0461 56.0518 91.2085 55.3626C91.3739 54.6693 91.8906 54.1138 92.5706 53.8983C93.4896 53.6042 94.3259 53.0947 95.0101 52.4146C96.1711 51.2679 96.8246 49.7046 96.8246 48.074C96.8246 46.4423 96.1711 44.8789 95.0101 43.7334C93.8409 42.6153 92.2868 41.9924 90.6694 41.9924C89.0521 41.9924 87.4978 42.6153 86.3288 43.7334C85.6477 44.4175 85.1392 45.2538 84.8441 46.1728C84.6287 46.8519 84.0732 47.3685 83.3809 47.535C82.6916 47.6973 81.9677 47.489 81.4694 46.9856L69.1486 34.6648L58.7792 45.0138C59.2377 45.3345 59.6666 45.6949 60.0607 46.0911C62.639 48.6663 63.648 52.421 62.7074 55.9418C61.767 59.4627 59.0193 62.2145 55.4995 63.16C51.9807 64.1055 48.2241 63.1018 45.6458 60.5266C45.2466 60.1294 44.88 59.7005 44.5481 59.2461L34.1992 69.5951L46.5199 81.9363C47.0233 82.4335 47.2306 83.1575 47.0693 83.8468C46.9028 84.5401 46.3862 85.0956 45.7071 85.3111C44.7871 85.6051 43.9508 86.1147 43.2667 86.7947C41.7156 88.3458 41.1101 90.6065 41.6779 92.7244C42.2456 94.8432 43.9008 96.4975 46.0185 97.065C48.1373 97.6328 50.398 97.0273 51.9482 95.4762C52.6292 94.7921 53.1378 93.9558 53.4329 93.0368C53.6483 92.3577 54.2038 91.8411 54.8961 91.6746C55.0564 91.6419 55.2208 91.6277 55.3842 91.6338L55.3837 91.6336Z'
      fill='#4393FE'
    />
    <path
      d='M69.1268 17.2813C68.0035 17.2813 67.0938 16.3715 67.0938 15.2483V2.03302C67.0938 0.909791 68.0036 0 69.1268 0C70.25 0 71.1598 0.909817 71.1598 2.03302V15.2483C71.1598 15.7874 70.9454 16.3052 70.5645 16.686C70.1836 17.0669 69.6659 17.2813 69.1268 17.2813Z'
      fill='#4393FE'
    />
    <path
      d='M69.1268 138.253C68.0035 138.253 67.0938 137.343 67.0938 136.219V123.004C67.0938 121.881 68.0036 120.971 69.1268 120.971C70.25 120.971 71.1598 121.881 71.1598 123.004V136.219C71.1598 136.759 70.9454 137.276 70.5645 137.657C70.1836 138.039 69.6659 138.253 69.1268 138.253Z'
      fill='#4393FE'
    />
    <path
      d='M136.201 71.1606H122.986C121.863 71.1606 120.953 70.2497 120.953 69.1275C120.953 68.0043 121.863 67.0935 122.986 67.0935H136.201C137.325 67.0935 138.234 68.0043 138.234 69.1275C138.234 70.2497 137.325 71.1606 136.201 71.1606Z'
      fill='#4393FE'
    />
    <path
      d='M15.2493 71.1606H2.03302C0.91081 71.1606 0 70.2497 0 69.1275C0 68.0043 0.910836 67.0935 2.03302 67.0935H15.2493C16.3716 67.0935 17.2824 68.0043 17.2824 69.1275C17.2824 70.2497 16.3715 71.1606 15.2493 71.1606Z'
      fill='#4393FE'
    />
    <path
      d='M21.8988 45.2371C21.5557 45.2381 21.2177 45.1472 20.9226 44.9726L9.33403 38.609C8.35071 38.0474 8.00966 36.7955 8.57126 35.8133C9.13286 34.831 10.3837 34.4899 11.367 35.0515L22.8533 41.4151C23.3292 41.6725 23.6825 42.1095 23.8346 42.6282C23.9878 43.1469 23.9275 43.7055 23.6672 44.1803C23.3128 44.8267 22.636 45.232 21.8988 45.2371Z'
      fill='#4393FE'
    />
    <path
      d='M127.927 103.447C127.587 103.448 127.251 103.364 126.95 103.202L115.362 96.8389V96.8378C114.373 96.2773 114.028 95.0203 114.589 94.033C115.15 93.0446 116.406 92.6984 117.395 93.26L128.963 99.6236H128.964C129.785 100.067 130.199 101.012 129.968 101.916C129.737 102.82 128.92 103.451 127.988 103.447L127.927 103.447Z'
      fill='#4393FE'
    />
    <path
      d='M95.0504 23.9301C94.3315 23.9321 93.6648 23.5543 93.2972 22.9365C92.9296 22.3177 92.9163 21.5519 93.2614 20.9209L99.6251 9.33232C99.8865 8.86056 100.325 8.51135 100.843 8.36329C101.362 8.21421 101.918 8.27752 102.39 8.53892C103.361 9.08317 103.715 10.3065 103.183 11.2837L96.8394 22.8722V22.8733C96.482 23.5268 95.7948 23.9321 95.0504 23.9301Z'
      fill='#4393FE'
    />
    <path
      d='M36.8409 129.958C36.4947 129.957 36.1526 129.873 35.8453 129.714C35.3725 129.453 35.0243 129.015 34.8752 128.496C34.7272 127.977 34.7905 127.421 35.0519 126.949L41.4155 115.36V115.359C41.6851 114.888 42.1313 114.542 42.6562 114.399C43.18 114.257 43.7396 114.328 44.2113 114.598C45.1936 115.159 45.5357 116.41 44.9741 117.393L38.6105 128.982C38.2347 129.598 37.5618 129.969 36.8409 129.958Z'
      fill='#4393FE'
    />
    <path
      d='M40.7862 25.4149C40.0796 25.4118 39.4251 25.0422 39.0585 24.4387L32.1253 13.2156C31.53 12.2609 31.821 11.0049 32.7758 10.4097C33.7305 9.81447 34.9864 10.1064 35.5817 11.0601L42.5149 22.3037H42.5139C42.8008 22.7621 42.8937 23.3156 42.7712 23.8414C42.6497 24.3683 42.3229 24.8248 41.8634 25.1097C41.5397 25.3098 41.1671 25.4159 40.7862 25.4149Z'
      fill='#4393FE'
    />
    <path
      d='M104.404 128.23C103.697 128.227 103.043 127.858 102.675 127.254L95.7212 116.011L95.7222 116.012C95.1902 115.061 95.5017 113.861 96.4278 113.289C97.354 112.717 98.5671 112.976 99.1786 113.877L106.213 125.038C106.498 125.499 106.588 126.054 106.461 126.581C106.335 127.108 106.005 127.562 105.542 127.844C105.21 128.084 104.813 128.219 104.404 128.23L104.404 128.23Z'
      fill='#4393FE'
    />
    <path
      d='M114.956 42.8192C114.254 42.8203 113.6 42.4588 113.227 41.8635C112.942 41.405 112.849 40.8516 112.97 40.3257C113.093 39.7988 113.419 39.3424 113.878 39.0575L125.121 32.1243C126.072 31.5412 127.314 31.8312 127.907 32.7747C128.194 33.2332 128.287 33.7866 128.164 34.3135C128.042 34.8394 127.716 35.2958 127.256 35.5807L116.013 42.5346C115.693 42.7245 115.328 42.8223 114.956 42.8192Z'
      fill='#4393FE'
    />
    <path
      d='M12.0578 106.435C11.148 106.438 10.3464 105.836 10.0962 104.962C9.84607 104.087 10.2065 103.153 10.9795 102.674L22.223 95.7199C22.6815 95.4085 23.2482 95.2982 23.7904 95.4136C24.3326 95.53 24.8044 95.8618 25.0954 96.3336C25.3864 96.8053 25.4732 97.3761 25.3333 97.9122C25.1944 98.4493 24.8422 98.9058 24.3581 99.1763L13.1146 106.13C12.7971 106.327 12.4315 106.432 12.0578 106.435Z'
      fill='#4393FE'
    />
  </svg>
);

export default PuzzlePiece;
