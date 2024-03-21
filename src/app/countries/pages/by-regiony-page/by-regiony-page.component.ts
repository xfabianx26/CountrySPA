import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-regiony-page',
  templateUrl: './by-regiony-page.component.html',
  styles: ``
})
export class ByRegionyPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;

  }

  searchByRegion(region: Region){
    this.selectedRegion = region;
   this.countriesService.searchRegion(region).subscribe( countries =>  {

    this.countries = countries;
   })
  }
}
