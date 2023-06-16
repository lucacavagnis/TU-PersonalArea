<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('sku', 100);
            $table->string('name', 100);
            $table->string('desc', 1000)->nullable();
            $table->decimal('price', 8, 2)->default(0);
            $table->decimal('reserved_price', 8, 2)->default(0);
            $table->string('image')->nullable();
            $table->integer('qta_total');
            $table->integer('qta_available');
            $table->string('prot_number');
            $table->string('prot_date');
            $table->string('warehouse_code')->nullable();
            $table->string('expire_date');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('subcategory_id');
            $table->unsignedBigInteger('company_id');
            $table->timestamps();

            $table->unique(['company_id','sku']);

            $table->foreign('category_id', 'cat___fk')->references('id')->on('categories');
            $table->foreign('subcategory_id', 'subcat___fk')->references('id')->on('subcategories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
