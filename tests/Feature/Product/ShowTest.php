<?php

namespace Tests\Feature\Product;

use App\Models\Cart;
use App\Models\Company;
use App\Models\Lot;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ShowTest extends TestCase
{
    use RefreshDatabase;

    public function test_product_page_can_be_render()
    {
        $company=Company::factory();
        $user= User::factory()->for($company)->create();
        $product = Lot::factory()->for($company)->create();

        $response = $this->actingAs($user)->withSession(['cart'=>new Cart()])->get(route('products.show',$product->id));

        $response->assertStatus(200);
    }
}
