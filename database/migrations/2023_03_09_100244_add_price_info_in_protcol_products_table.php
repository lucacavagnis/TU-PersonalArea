<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('protocol_products', function (Blueprint $table) {
            $table->unsignedFloat('price');
            $table->unsignedFloat('original_price');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('protcol_products', function (Blueprint $table) {
            $table->dropColumn('price');
            $table->dropColumn('original_price');
        });
    }
};
