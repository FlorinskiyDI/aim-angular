import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// core
import { AppVersionService } from './core-services/version.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  appVersion = 'Loading...';

  constructor(private versionService: AppVersionService) { }

  ngOnInit(): void {
    this.versionService.getVersion().subscribe((data) => {
      this.appVersion = data.version;
    });
  }
  title = 'aim-angular';
}
