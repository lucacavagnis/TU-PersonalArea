<?php

namespace Tests\Feature\Product;

use App\Models\Company;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Tests\TestCase;

class ProductsIndexTest extends TestCase
{
    use RefreshDatabase;

    private function user(){
        return User::factory()->for(Company::factory()->has(Product::factory()->count(15)))->create();
    }

    public function test_products_index_page_can_be_render()
    {
        $user=$this->user();

        $response = $this->actingAs($user)->get(route('products.dashboard'));

        $response->assertStatus(200);
    }

    public function test_products_index_page_with_filters_can_be_render()
    {
        $user=$this->user();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'name']);

        $response->assertStatus(200);

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>Str::random()]);

        $response->assertStatus(200);

        $response = $this->actingAs($user)->get(route('products.dashboard'),['search'=>Str::random()]);

        $response->assertStatus(200);

    }
}
