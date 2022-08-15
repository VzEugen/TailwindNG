import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'camelCaseToSentenceCase'
})

export class CamelCaseToSentenceCasePipe implements PipeTransform {
  transform(input: string): any {
    const output: string = input.replace(/([A-Z])/g, " $1")
    return output.charAt(0).toUpperCase() + output.slice(1)
  }
}
