<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use App\Models\ClassModel;
use App\Services\XenditService;
use Illuminate\Http\Request;

class InvoiceController extends Controller
{
    public function checkout(Request $request, ClassModel $classModel, XenditService $xendit)
    {
        $user = auth()->user();

        if ($classModel->is_free) {
            abort(400, 'Kelas ini gratis');
        }

        $invoice = $xendit->createInvoice($user, $classModel);

        return redirect($invoice->invoice_url);
    }
}
