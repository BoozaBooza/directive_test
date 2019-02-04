import { Directive, Input, OnDestroy, ViewContainerRef  } from '@angular/core';

import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef, OverlayModule } from '@angular/cdk/overlay';

import { TooltipComponent } from './tooltip/tooltip.component';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy  {

  @Input() str:string=""; 

  private _portal: ComponentPortal<TooltipComponent>;
  _overlayRef: OverlayRef | null;
  _tooltipInstance: TooltipComponent | null;

  constructor(
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef) {

         }

  ngOnDestroy () {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._tooltipInstance = null;
    }
  }

  show (): void {
    const overlayRef = this._createOverlay();
    this._portal = this._portal || new ComponentPortal(TooltipComponent, this._viewContainerRef);
    this._tooltipInstance = overlayRef.attach(this._portal).instance;
  }

  hide (): void {
    this._tooltipInstance.hide();
  }

  private _createOverlay(): OverlayRef {
    if (this._overlayRef) {
      return this._overlayRef;
    }
    this._overlayRef = this._overlay.create({
      // direction: this._dir,
      // positionStrategy: strategy,
      // panelClass: TOOLTIP_PANEL_CLASS,
      // scrollStrategy: this._scrollStrategy()
    });
  }

  private _detach() {
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
    }

    this._tooltipInstance = null;
  }

}