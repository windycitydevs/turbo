import fs from "fs";
import { join } from "path";

export const getDir = (str: string) => fs.readdirSync(join(process.cwd(), str));

console.log(getDir(`app/fonts`));

const filterFontDomainDisplayCondensed = getDir("app/fonts").filter(t =>
  t.includes("DomaineDisplayCondensedWeb")
);
const filterFontBasisGrotesquePro = getDir("app/fonts").filter(t =>
  t.includes("basis-grotesque-pro")
);

const ws = (constName: string) =>
  fs.createWriteStream(join(process.cwd(), `utils/${constName}.ts`));

const pathArr = (arr: string[]) =>
  arr.map(v => {
    return { path: `./fonts/${v}` };
  });

const domainDisplayCondensedPaths = pathArr(filterFontDomainDisplayCondensed);
const wsExe = ({
  constName,
  pathArr,
  font
}: {
  constName: string;
  pathArr: {
    path: string;
  }[];
  font: "basis" | "domaine";
}) =>
  font === "domaine"
    ? ws(constName).write(
        Buffer.from(
          Buffer.from(
            `import localFont from "@next/font/local"
export const ${constName} = localFont<"--font-domain-display-condensed">({
  variable: "--font-domain-display-condensed",
  display: "swap",
  src: ${JSON.stringify(pathArr, null, 2)}
});`
          ).toJSON().data
        ).valueOf() satisfies Uint8Array
      )
    : ws(constName).write(
        Buffer.from(
          Buffer.from(
            `import localFont from "@next/font/local"
export const ${constName} = localFont<"--font-basis-grotesque-pro">({
  variable: "--font-basis-grotesque-pro",
  display: "swap",
  src: ${JSON.stringify(pathArr, null, 2)}
});`
          ).toJSON().data
        ).valueOf() satisfies Uint8Array
      );

wsExe({
  pathArr: pathArr(filterFontDomainDisplayCondensed),
  constName: "DomainDisplayCondensded",
  font: "domaine"
});

wsExe({
  pathArr: pathArr(filterFontBasisGrotesquePro),
  constName: "BasisGrotesquePro",
  font: "basis"
});
