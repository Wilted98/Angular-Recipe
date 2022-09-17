import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  recipeDetails: Recipe;

  ngOnInit() {
    this.recipeService.recipeWasSelected.subscribe(
      (item: Recipe) => (this.recipeDetails = item)
    );
  }
}
