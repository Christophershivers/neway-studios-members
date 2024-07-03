<script>
    import {loadStripe} from '@stripe/stripe-js'

    const stripe = new Stripe('')
</script>

<form method="POST" action="?/pay">
    <input name="amount"/>
    <button>pay</button>
</form>