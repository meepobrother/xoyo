import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[xoyoStringTemplateOutlet]',
  exportAs: 'xoyoStringTemplateOutlet'
})
export class StringTemplateOutletDirective {
  private isTemplate: boolean;
  private inputTemplate: TemplateRef<void> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;
  private defaultViewRef: EmbeddedViewRef<void> | null = null;

  private itemContext: any = {};
  constructor(private viewContainer: ViewContainerRef, private defaultTemplate: TemplateRef<void>) { }

  @Input()
  set xoyoStringTemplateOutlet(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this.isTemplate = true;
      this.inputTemplate = value;
    } else {
      this.isTemplate = false;
    }
  }

  @Input()
  set xoyoStringTemplateOutletContext(context: any) {
    this.itemContext = context || {};
    this.updateView();
  }

  updateView(): void {
    if (!this.isTemplate) {
      if (!this.defaultViewRef) {
        this.viewContainer.clear();
        this.inputViewRef = null;
        if (this.defaultTemplate) {
          this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.itemContext);
        }
      }
    } else {
      if (!this.inputViewRef) {
        this.viewContainer.clear();
        this.defaultViewRef = null;
        if (this.inputTemplate) {
          this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.itemContext);
        }
      }
    }
  }
}
