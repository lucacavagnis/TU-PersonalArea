<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('order_product_services', function (Blueprint $table) {
            $table->unsignedBigInteger('order_product_id');

            $table->foreign('order_product_id', 'order_product_order_product_service_id_foreign')->references('id')->on('order_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('order_product_services', function (Blueprint $table) {
            $table->dropForeign('order_product_order_product_service_id_foreign');
            $table->dropColumn('order_product_id');
        });
    }
};
