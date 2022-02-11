import { Component, OnInit } from "@angular/core";
import { DogsResponseModel } from "./models/dog.model";
import { DogsResourceService } from "./services/dogs-resource.service";

@Component({
  selector: "app-dogs",
  templateUrl: "./dogs.component.html",
  styleUrls: ["./dogs.component.scss"],
})
export class DogsComponent implements OnInit {
  dogs: string[];
  constructor(private dogsResourceService: DogsResourceService) {}

  ngOnInit(): void {
    this.dogsResourceService
      .getDogs(40)
      .subscribe((dogsResponse: DogsResponseModel) => {
        this.dogs = dogsResponse.message;
      });
  }
}
