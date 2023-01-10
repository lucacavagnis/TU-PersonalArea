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
        Schema::table('products', function (Blueprint $table) {
            $table->string('sku', 100)->nullable()->change();
            $table->decimal('price', 8, 2)->nullable()->change();
            $table->decimal('reserved_price', 8, 2)->nullable()->change();
            $table->string('prot_number')->nullable()->change();
            $table->string('prot_date')->nullable()->change();
            $table->string('expire_date')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->string('sku', 100)->change();
            $table->decimal('price', 8, 2)->change();
            $table->decimal('reserved_price', 8, 2)->change();
            $table->string('prot_number')->change();
            $table->string('prot_date')->change();
            $table->string('expire_date')->change();
        });
    }
};
