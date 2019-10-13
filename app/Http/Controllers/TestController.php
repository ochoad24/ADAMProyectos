<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\TestMail;

class TestController extends Controller
{
    public function testmail()
    {
        // Send an email to codebriefly@yopmail.com
        Mail::to('ochoad24@gmail.com')->send(new TestMail);
        return back();
    } 
}
