import { AfterContentInit, Component, contentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  tabs = contentChildren(TabComponent)
  ngAfterContentInit(): void {
    const activeTab = this.tabs().filter((tab) => tab.active())
    if (activeTab.length === 0) {
      this.selectTab(this.tabs()[0])
    }
  }
  selectTab(tab: TabComponent) {
    this.tabs().forEach((tab) => tab.active.set(false))
    tab.active.set(true)
    return false
  }
}
