import {ValueObject} from "../../../utils/valueObject";

interface ImageInfoSchema {
  title: string,
  filename: string,
  date: string,
  descriptions: string[],
}

export class ImageInfo extends ValueObject<"Image", ImageInfoSchema> {
  constructor(readonly value: ImageInfoSchema) {
    super(value);
  };

  protected isValid(): boolean {
    const fileNameRegexp = /^.+\.(png|gif)$/;
    const isValidFileName = fileNameRegexp.test(this.value.filename);

    const dateRegexp = /^(0[1-9])|([1-2][0-9])|(3[0-1])$/
    const isValidDate = dateRegexp.test(this.value.date);

    return isValidFileName && isValidDate;
  };
}

