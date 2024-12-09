import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPopover]',
  standalone: true
})
export class PopoverDirective {

  
  // Bind para alterar a classe CSS com base em eventos de arrastar e soltar
  @HostBinding('class.file-over') fileOver: boolean = false;

  // Ouve o evento de "dragover" e impede o comportamento padrão
  @HostListener('dragover', ['$event']) onDragOver(event: Event) {
    event.preventDefault();
    this.fileOver = true;
  }

  // Ouve o evento de "dragleave" e remove a classe
  @HostListener('dragleave', ['$event']) onDragLeave(event: Event) {
    event.preventDefault();
    this.fileOver = false;
  }

  // Ouve o evento de "drop" e impede o comportamento padrão
  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    this.fileOver = false;
    // Você pode manipular os arquivos arrastados aqui
    const files = event.dataTransfer.files;
    console.log(files);
  }

}
