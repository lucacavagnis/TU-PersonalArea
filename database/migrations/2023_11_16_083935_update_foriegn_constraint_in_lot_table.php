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
        Schema::table('lot_locations', function (Blueprint $table) {
            $table->dropForeign('lot_location_lot_id_foreign');
            $table->foreign('lot_id', 'lot_location_lot_id_foreign')->references('id')->on('lots')->onDelete("cascade")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lot_locations', function (Blueprint $table) {
            $table->dropForeign('lot_location_lot_id_foreign');
            $table->foreign('lot_id', 'lot_location_lot_id_foreign')->references('id')->on('lots');

        });
    }
};
