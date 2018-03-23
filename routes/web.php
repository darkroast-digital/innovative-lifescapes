<?php

/*
|--------------------------------------------------------------------------
| #WEB
|--------------------------------------------------------------------------
*/



use App\Controllers\HomeController;
use App\Controllers\SiteController;



// #HOME
// =========================================================================

$app->get('/', HomeController::class . ':index')->setName("home");
$app->post('/', HomeController::class . ':newsletter');
$app->get('/about', SiteController::class . ':about')->setName('about');
$app->get('/careers', SiteController::class . ':careers')->setName('careers');
$app->post('/careers', SiteController::class . ':resumeSubmit');
$app->get('/contact', SiteController::class . ':contact')->setName('contact');
$app->post('/contact', SiteController::class . ':contactSubmit');
$app->get('/faqs', SiteController::class . ':faqs')->setName('faqs');
$app->get('/models', SiteController::class . ':models')->setName('models');
$app->get('/partners', SiteController::class . ':partners')->setName('partners');
$app->get('/photos', SiteController::class . ':photos')->setName('photos');
$app->get('/privacy-policy', SiteController::class . ':privacyPolicy')->setName('privacyPolicy');