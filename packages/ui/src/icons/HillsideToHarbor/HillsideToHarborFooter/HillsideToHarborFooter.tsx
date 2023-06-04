import type { FC, SVGProps } from "react";
import type { RemoveFields } from "../../../typedefs/helpers";

const HillsideToHarborFooter: FC<
  RemoveFields<SVGProps<SVGSVGElement>, "viewBox" | "xmlns" | "fill">
> = ({ ...props }) => (
  <svg
    {...props}
    viewBox='0 0 277 129'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <g clipPath='url(#clip0_430_421)'>
      <path
        d='M2.23872 104.098C2.23872 101.348 1.90582 100.016 0 99.1019V99.019H9.36721V99.1019C7.46139 100.02 7.08878 101.351 7.08878 104.098V112.719H19.0215V104.098C19.0215 101.348 18.6917 100.016 16.7431 99.1019V99.019H26.15V99.1019C24.2014 100.02 23.8716 101.351 23.8716 104.098V123.089C23.8716 125.839 24.2045 127.171 26.15 128.086V128.169H16.7431V128.086C18.6917 127.168 19.0215 125.836 19.0215 123.089V113.845H7.08573V123.089C7.08573 125.839 7.45834 127.171 9.36415 128.086V128.169H0V128.086C1.90582 127.168 2.23872 125.836 2.23872 123.089V104.098Z'
        fill='#4E5F4F'
      />
      <path
        d='M33.9021 123.795C33.9021 126.545 34.1923 127.211 35.8904 128.086V128.169H27.3112V128.086C29.0093 127.211 29.2995 126.545 29.2995 123.795V112.385C29.2995 109.721 28.8444 108.76 27.1035 107.888V107.806H33.8991V123.798L33.9021 123.795ZM31.4985 98.2241C33.1569 98.2241 34.4397 99.4732 34.4397 101.14C34.4397 102.806 33.1539 104.055 31.4985 104.055C29.8431 104.055 28.5573 102.763 28.5573 101.14C28.5573 99.5162 29.8431 98.2241 31.4985 98.2241Z'
        fill='#4E5F4F'
      />
      <path
        d='M43.1832 123.795C43.1832 126.545 43.4733 127.211 45.1715 128.086V128.168H36.5922V128.086C38.2904 127.211 38.5805 126.545 38.5805 123.795V101.557C38.5805 98.8931 38.043 97.9325 36.3418 97.0609V96.978H43.1801V123.798L43.1832 123.795Z'
        fill='#4E5F4F'
      />
      <path
        d='M52.4254 123.795C52.4254 126.545 52.7155 127.211 54.4137 128.086V128.168H45.8344V128.086C47.5326 127.211 47.8227 126.545 47.8227 123.795V101.557C47.8227 98.8931 47.2852 97.9325 45.584 97.0609V96.978H52.4223V123.798L52.4254 123.795Z'
        fill='#4E5F4F'
      />
      <path
        d='M59.0163 111.261C59.0163 113.176 59.8867 114.134 63.4082 115.383C67.9681 116.924 69.9137 118.839 69.9137 122.212C69.9137 126.376 66.5968 128.583 62.9104 128.583C60.3815 128.583 58.9735 127.582 57.7702 127.582C57.025 127.582 56.4447 128.04 55.9896 128.583L55.5742 120.711H55.6994C57.3976 125.041 59.844 127.791 62.9104 127.791C64.9811 127.791 66.4319 126.376 66.4319 124.21C66.4319 121.877 64.7337 121.045 61.7895 119.962C57.6022 118.504 55.7788 116.672 55.7788 113.339C55.7788 109.592 58.7628 107.385 62.1194 107.385C64.3978 107.385 65.5187 108.426 66.8014 108.426C67.5467 108.426 68.0445 108.008 68.7072 107.385V114.257H68.6248C67.174 110.758 64.8956 108.177 62.1194 108.177C60.1708 108.177 59.0102 109.552 59.0102 111.258L59.0163 111.261Z'
        fill='#4E5F4F'
      />
      <path
        d='M77.8299 123.795C77.8299 126.545 78.12 127.211 79.8182 128.086V128.169H71.2389V128.086C72.9371 127.211 73.2272 126.545 73.2272 123.795V112.385C73.2272 109.721 72.7721 108.76 71.0312 107.888V107.806H77.8268V123.798L77.8299 123.795ZM75.4262 98.2241C77.0847 98.2241 78.3674 99.4732 78.3674 101.14C78.3674 102.806 77.0816 104.055 75.4262 104.055C73.7709 104.055 72.485 102.763 72.485 101.14C72.485 99.5162 73.7709 98.2241 75.4262 98.2241Z'
        fill='#4E5F4F'
      />
      <path
        d='M94.7387 101.557C94.7387 98.8931 94.2012 97.9325 92.4603 97.0609V96.978H99.3384V123.629C99.3384 126.21 99.6713 127.211 101.369 128.086V128.168H94.7387V123.172C93.9935 126.379 91.712 128.586 88.4807 128.586C84.2537 128.586 80.6895 124.713 80.6895 118.093C80.6895 111.473 84.3362 107.391 88.6456 107.391C91.8373 107.391 93.9905 109.432 94.7387 112.556V101.563V101.557ZM94.7387 120.005V115.966C94.7387 111.593 92.4176 109.137 90.1788 109.137C87.3201 109.137 85.7044 112.636 85.7044 118.09C85.7044 123.543 87.3201 126.628 90.1788 126.628C92.3748 126.628 94.7387 124.255 94.7387 120.005Z'
        fill='#4E5F4F'
      />
      <path
        d='M118.943 117.132H107.007C107.007 122.503 109.12 126.21 113.017 126.21C115.464 126.21 117.577 124.713 118.613 121.463L118.903 121.506C118.158 126.002 115.381 128.586 111.151 128.586C106.301 128.586 102.242 124.713 102.242 118.007C102.242 111.676 106.344 107.388 111.112 107.388C116.499 107.388 118.946 111.47 118.946 117.132H118.943ZM114.343 116.215C114.343 111.884 113.928 108.177 111.112 108.177C108.873 108.177 107.214 111.51 107.049 116.215H114.343Z'
        fill='#4E5F4F'
      />
      <path
        d='M159.672 104.512C159.672 101.762 159.339 100.431 157.434 99.516V99.4331H166.801V99.516C164.895 100.434 164.522 101.766 164.522 104.512V113.133H176.458V104.512C176.458 101.762 176.128 100.431 174.18 99.516V99.4331H183.587V99.516C181.638 100.434 181.308 101.766 181.308 104.512V123.503C181.308 126.253 181.641 127.585 183.587 128.5V128.583H174.18V128.5C176.128 127.582 176.458 126.25 176.458 123.503V114.26H164.522V123.503C164.522 126.253 164.895 127.585 166.801 128.5V128.583H157.434V128.5C159.339 127.582 159.672 126.25 159.672 123.503V104.512Z'
        fill='#4E5F4F'
      />
      <path
        d='M203.81 126.959C203.104 128.082 201.822 128.917 199.998 128.917C197.72 128.917 196.391 127.585 196.144 125.378C196.144 125.296 196.061 124.295 196.061 124.086C195.606 126.793 193.285 128.874 190.258 128.874C187.4 128.874 184.996 127.208 184.996 123.878C184.996 119.547 189.223 118.338 193.533 117.341L196.019 116.8V112.802C196.019 110.469 194.941 108.597 192.58 108.597C190.509 108.597 189.513 109.929 189.513 111.638C189.513 113.136 190.219 114.054 191.379 114.054C191.544 114.054 191.795 114.011 191.96 113.928C191.627 115.26 190.469 115.926 189.101 115.926C187.278 115.926 185.909 114.803 185.909 112.762C185.909 109.889 188.85 107.805 192.83 107.805C197.802 107.805 200.704 109.637 200.704 114.385C200.704 118.093 200.621 121.422 200.621 124.255C200.621 126.253 201.284 127.211 202.692 127.211C203.147 127.211 203.52 127.085 203.81 126.876V126.959ZM194.238 118.007C191.297 118.755 189.596 120.13 189.596 123.086C189.596 125.375 190.674 126.542 192.332 126.542C194.281 126.542 195.896 124.835 195.979 121.668L196.022 117.586L194.241 118.004L194.238 118.007Z'
        fill='#4E5F4F'
      />
      <path
        d='M216.035 112.633C216.035 111.51 215.33 110.758 213.965 110.758C211.851 110.758 209.985 113.713 209.985 117.838V124.292C209.985 127.042 210.855 127.665 212.804 128.5V128.583H203.397V128.5C205.095 127.625 205.385 126.959 205.385 124.209V112.799C205.385 110.135 204.93 109.174 203.189 108.303V108.22H209.985V114.299C210.813 110.884 212.596 107.845 215.62 107.845C217.816 107.845 219.349 109.26 219.349 111.344C219.349 113.633 217.859 114.925 216.2 114.925C215.538 114.925 214.997 114.717 214.832 114.468C215.495 114.22 216.035 113.551 216.035 112.636V112.633Z'
        fill='#4E5F4F'
      />
      <path
        d='M225.277 124.13C224.739 126.296 222.873 128.42 220.924 128.96C221.38 126.502 221.422 123.421 221.422 119.756V101.974C221.422 99.3106 220.924 98.35 219.184 97.4784V97.3955H226.022V113.219C226.727 110.012 229.006 107.806 232.237 107.806C236.507 107.806 240.028 111.679 240.028 118.299C240.028 124.918 236.299 129 231.7 129C228.633 129 226.147 127.211 225.277 124.127V124.13ZM230.539 109.764C228.343 109.764 226.022 112.136 226.022 116.426V120.84C226.022 125.17 228.3 127.546 230.499 127.546C233.441 127.546 235.059 123.921 235.059 118.385C235.059 112.848 233.444 109.764 230.542 109.764H230.539Z'
        fill='#4E5F4F'
      />
      <path
        d='M241.564 118.381C241.564 112.219 245.501 107.802 250.806 107.802C256.112 107.802 260.006 112.215 260.006 118.381C260.006 124.547 256.069 129 250.806 129C245.544 129 241.564 124.587 241.564 118.381ZM254.991 118.381C254.991 112.676 253.665 108.594 250.803 108.594C247.942 108.594 246.576 112.676 246.576 118.381C246.576 124.086 247.902 128.208 250.803 128.208C253.705 128.208 254.991 124.086 254.991 118.381Z'
        fill='#4E5F4F'
      />
      <path
        d='M273.684 112.633C273.684 111.51 272.978 110.758 271.613 110.758C269.5 110.758 267.633 113.713 267.633 117.838V124.292C267.633 127.042 268.504 127.665 270.452 128.5V128.583H261.046V128.5C262.744 127.625 263.034 126.959 263.034 124.209V112.799C263.034 110.135 262.579 109.174 260.838 108.303V108.22H267.633V114.299C268.461 110.884 270.245 107.845 273.268 107.845C275.464 107.845 276.998 109.26 276.998 111.344C276.998 113.633 275.507 114.925 273.849 114.925C273.186 114.925 272.645 114.717 272.48 114.468C273.143 114.22 273.684 113.551 273.684 112.636V112.633Z'
        fill='#4E5F4F'
      />
      <path
        d='M135.884 115.984C135.683 118.869 134.65 120.916 132.067 120.916C129.913 120.916 128.563 119.56 128.563 116.647V107.274H126.984V107.044C129.339 106.495 130.946 104.448 131.52 101.563H131.749V106.523H135.509L135.365 107.271H131.749V116.617C131.749 118.375 132.265 119.182 133.355 119.182C134.562 119.182 135.335 118.087 135.622 115.951L135.881 115.978L135.884 115.984Z'
        fill='#4E5F4F'
      />
      <path
        d='M136.404 113.563C136.404 109.294 139.132 106.237 142.806 106.237C146.48 106.237 149.177 109.294 149.177 113.563C149.177 117.832 146.45 120.919 142.806 120.919C139.162 120.919 136.404 117.863 136.404 113.563ZM145.704 113.563C145.704 109.61 144.785 106.784 142.806 106.784C140.827 106.784 139.877 109.61 139.877 113.563C139.877 117.516 140.796 120.37 142.806 120.37C144.816 120.37 145.704 117.516 145.704 113.563Z'
        fill='#4E5F4F'
      />
      <path
        d='M149.176 126.149H127.137V128.696H149.176V126.149Z'
        fill='#4E5F4F'
      />
      <path
        d='M102.49 24.6567C102.49 24.6567 119.465 15.3392 132.097 33.2929C144.427 50.8201 154.527 44.2309 164.414 41.0391C173.454 38.1205 175.543 49.9761 175.543 49.9761V70.3114L100.047 81.1604V58.6062L99.9062 40.4376L102.49 24.6598V24.6567Z'
        fill='#4E5F4F'
      />
      <path
        d='M100.048 75.4178C100.048 75.4178 97.3324 71.0046 128.064 70.354C142.137 70.0563 125.397 58.5935 143.469 62.1658C176.528 68.6998 175.333 61.2451 175.333 61.2451L175.572 81.6081H100.048V75.4178Z'
        fill='#91D3CA'
      />
      <path
        d='M176.46 82.0809H99.1309V39.5842C99.1309 29.0114 103.23 19.0709 110.67 11.5947C118.11 4.11862 127.999 0 138.524 0C159.442 0 176.46 17.1006 176.46 38.1203V82.0778V82.0809ZM100.963 80.2395H174.627V38.1203C174.627 18.1164 158.431 1.84141 138.524 1.84141C118.617 1.84141 100.963 18.7732 100.963 39.5842V80.2395Z'
        fill='#4E5F4F'
      />
      <path
        d='M150.701 33.2928C156.922 33.2928 161.965 28.2254 161.965 21.9743C161.965 15.7232 156.922 10.6558 150.701 10.6558C144.481 10.6558 139.438 15.7232 139.438 21.9743C139.438 28.2254 144.481 33.2928 150.701 33.2928Z'
        fill='#F49A7A'
      />
    </g>
    <defs>
      <clipPath id='clip0_430_421'>
        <rect width='277' height='129' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default HillsideToHarborFooter;
