<?php

namespace App\Providers;

use App\Models\Company;
use App\Models\Order;
use Illuminate\Support\Facades\Gate;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('order-product', function (User $user, Product $product) {
            return $user->company_id === $product->company_id;
        });

        Gate::define('manage-order', function (User $user, Order $order) {
            return $user->company_id === $order->company_id;
        });


    }
}
