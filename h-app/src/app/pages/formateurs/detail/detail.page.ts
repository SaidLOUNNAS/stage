import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formateurs-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  @Input() formateur: any;

  constructor(private modalCtrl: ModalController) {}

  async onClose() {
    await this.modalCtrl.dismiss();
  }
}
