import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "convertData"
})
export default class ConvertDataPipe implements PipeTransform {
    transform(value: string, replace: string, replacement: string) {
        return value.replace(replace, replacement);
    }
}