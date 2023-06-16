<?php

namespace Tests\Feature;

use App\Models\Company;
use App\Models\Lot;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Inertia\Testing\Assert;
use Tests\TestCase;

class ProductTest extends TestCase
{
    private function lots(){return Lot::factory()->count(fake()->biasedNumberBetween);}
    private function products(Factory $lots){return Product::factory()->count(fake()->biasedNumberBetween)->has($lots);}
    private function company(Factory $products){return Company::factory()->has($products);}
    private function user(Factory $company){return User::factory()->for($company);}

    public function test_index(): void
    {
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();
        //No filter
        $response = $this->actingAs($user)->get(route('products.dashboard'));
        $response->assertStatus(200);
        $response->assertViewHas('products');
    }

    public function test_index_with_search(){
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['search'=>Str::random()]);
        $response->assertStatus(200);
    }
    public function test_index_with_empty_search(){
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['search'=>'']);
        $response->assertStatus(200);
    }

    public function test_index_with_order(){
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'name']);
        $response->assertStatus(200);

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'protocol_number']);
        $response->assertStatus(200);
    }

    public function test_index_with_empty_order(){
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'name']);
        $response->assertStatus(200);

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'']);
        $response->assertStatus(200);
    }

    public function test_index_with_wrong_order(){
        $lots=$this->lots();
        $products=$this->products($lots);
        $company=$this->company($products);
        $user=$this->user($company)->make();

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'name']);
        $response->assertStatus(200);

        $response = $this->actingAs($user)->get(route('products.dashboard'),['order'=>'']);
        $response->assertStatus(200);
    }
    public function show()
    {

    }
}
