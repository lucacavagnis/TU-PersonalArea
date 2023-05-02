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
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('price');
            $table->dropColumn('reserved_price');
            $table->dropColumn('qty_total');
            $table->dropColumn('qty_available');
            $table->dropColumn('prot_number');
            $table->dropColumn('prot_date');
            $table->dropColumn('warehouse_code');
            $table->dropColumn('expire_date');
            $table->dropColumn('expiring_notified');
            $table->dropColumn('under_escort_notified');
            $table->dropColumn('expired_notified');
            $table->dropColumn('payed');
            $table->dropColumn('property');
            $table->dropColumn('stock_managed');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->decimal('price', 8, 2)->default(0);
            $table->decimal('reserved_price', 8, 2)->default(0);
            $table->integer('qty_total');
            $table->integer('qty_available');
            $table->string('prot_number');
            $table->string('prot_date');
            $table->string('warehouse_code')->nullable();
            $table->string('expire_date');
            $table->boolean('expiring_notified')->default(false);
            $table->boolean('under_escort_notified')->default(false);
            $table->boolean('expired_notified')->default(false);
            $table->boolean('payed')->default(true);
            $table->unsignedBigInteger('property')->default(0);
            $table->boolean('stock_managed')->default(true);

        });
    }
};
