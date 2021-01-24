const fs = require("fs").promises;
const path = require("path");

const FIRST_FILE_INDEX = 351;
const LAST_FILE_INDEX = 363;
const pathVideoFiles =
  "/mnt/232 GB/IT Courses/React Pro/10. React Expert Interviews +";
const pathNameFile = "";
// const pathFile = path.join(__dirname, 'videos');
// const pathNameFile = path.join(__dirname, 'lesson-names.txt');

(async () => {
  try {
    const names = await fs.readFile(pathNameFile, "utf8");
    const namesArray = names.split("\r\n");

    for (i = FIRST_FILE_INDEX; i <= LAST_FILE_INDEX; i++) {
      await fs.rename(
        `${pathVideoFiles}/lesson${i}.mp4`,
        `${pathVideoFiles}/lesson${i} - ${namesArray[i - 1]}.mp4`
      );
    }
  } catch (e) {
    console.log(e);
  }
})();