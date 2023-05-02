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
        Schema::table('protocols', function (Blueprint $table) {
            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id','company_id_to_protocol_constraint')->on('companies')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('protocols', function (Blueprint $table) {
            $table->dropForeign('company_id_to_protocol_constraint');
            $table->dropColumn('company_id');
        });
    }
};
