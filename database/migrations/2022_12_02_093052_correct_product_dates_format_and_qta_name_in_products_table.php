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
            $table->date("prot_date")->change();
            $table->date("expire_date")->change();
            $table->renameColumn('qta_total','qty_total');
            $table->renameColumn('qta_available','qty_available');
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
            $table->string("prot_date")->change();
            $table->string("expire_date")->change();
            $table->renameColumn('qty_total','qta_total');
            $table->renameColumn('qty_available','qta_available');
        });
    }
};
