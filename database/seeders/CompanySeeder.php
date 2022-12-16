<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $company=new Company;
        $company->name="Tutto Ufficio S.r.l.";
        $company->email="info@tutto-ufficio.it";
        $company->vat="04618450961";
        $company->supervision=true;
        $company->machines=true;
        $company->save();

        $this->call([
            UserSeeder::class,
        ]);
    }
}
