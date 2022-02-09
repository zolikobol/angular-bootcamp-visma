import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortDescription",
})
export class ShortDescriptionPipe implements PipeTransform {
  private length: number | undefined;
  transform(value: string | undefined, ...args: any[]): any {
    this.length = args[0] ? args[0] : 200;
    return value ? this.getSubsString(value) : null;
  }

  private getSubsString(value: string): string {
    return value.length > this.length
      ? value.substring(0, this.length) + "..."
      : value;
  }
}
