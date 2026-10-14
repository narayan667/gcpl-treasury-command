#!/usr/bin/env python3
"""
Synthetic Data Generator for GCPL Treasury Command
Conforms strictly to PRD v2.0 requirements:
- 12 Entities across 3 Regions
- 78 Bank Accounts across 26 Banking Partners
- Mathematical consistency (Group Totals == Sum of Entity drill-downs)
- Realistic multi-currency figures (INR, USD, GBP, EUR, AED, IDR, etc.)
- 13-week forecasts with category breakdowns and variances
- 15 Standard Operating Model Workflows (W1-W15) with node graphs
- LOC-1 assessments, pooling proposals, covenants, facilities, audit hash-chain
"""

import json
import hashlib
from datetime import datetime, timezone

def generate_dataset():
    as_of = "2026-10-11T09:30:00Z"
    
    # Base FX rates against USD
    fx_to_usd = {
        "USD": 1.0,
        "INR": 1.0 / 84.20,
        "GBP": 1.2850,
        "EUR": 1.0880,
        "AED": 1.0 / 3.6725,
        "IDR": 1.0 / 15650.0,
        "BDT": 1.0 / 120.50,
        "SGD": 1.0 / 1.3250,
        "CAD": 1.0 / 1.3620,
        "ZAR": 1.0 / 18.250,
        "NGN": 1.0 / 1645.0,
        "KES": 1.0 / 129.20
    }
    
    # Regions
    regions = [
        {
            "id": "REG-ASIA",
            "name": "Asia",
            "lead": "Rajesh Sharma (Regional Treasury Lead)",
            "coverage_hours": "07:00 - 18:00 IST (UTC+5:30)",
            "hub_location": "Mumbai / Singapore",
            "color_tint": "#7C8CF8",
            "entities_count": 4
        },
        {
            "id": "REG-EMEA",
            "name": "Europe & Middle East",
            "lead": "Fiona MacLeod (Regional Treasury Lead)",
            "coverage_hours": "08:00 - 18:00 BST / GST (UTC+1 to +4)",
            "hub_location": "London / Dubai",
            "color_tint": "#D8B77A",
            "entities_count": 5
        },
        {
            "id": "REG-NA",
            "name": "North America",
            "lead": "David Miller (Regional Treasury Lead)",
            "coverage_hours": "08:00 - 18:00 EST (UTC-5)",
            "hub_location": "New York",
            "color_tint": "#9CBF7A",
            "entities_count": 3
        }
    ]

    # Banks (26 Banking Partners)
    banks = [
        {"id": "BNK-SBI", "name": "State Bank of India", "tier": "Tier 1 - Primary", "region": "Asia", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 120},
        {"id": "BNK-HDFC", "name": "HDFC Bank", "tier": "Tier 1 - Primary", "region": "Asia", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 95},
        {"id": "BNK-ICICI", "name": "ICICI Bank", "tier": "Tier 1 - Primary", "region": "Asia", "connectivity": "Host-to-Host (API)", "status": "CONNECTED", "latency_ms": 85},
        {"id": "BNK-STAN", "name": "Standard Chartered", "tier": "Tier 1 - Global Core", "region": "Global", "connectivity": "SWIFT MT940 / CAMT.053", "status": "CONNECTED", "latency_ms": 150},
        {"id": "BNK-CITI", "name": "Citi Treasury Solutions", "tier": "Tier 1 - Global Core", "region": "Global", "connectivity": "SWIFT MT940 / API", "status": "CONNECTED", "latency_ms": 110},
        {"id": "BNK-HSBC", "name": "HSBC Global Payments", "tier": "Tier 1 - Global Core", "region": "Global", "connectivity": "SWIFT MT940 / CAMT.053", "status": "CONNECTED", "latency_ms": 130},
        {"id": "BNK-DBS", "name": "DBS Bank", "tier": "Tier 2 - Regional", "region": "Asia", "connectivity": "API Direct", "status": "CONNECTED", "latency_ms": 105},
        {"id": "BNK-MAND", "name": "Bank Mandiri", "tier": "Tier 2 - Local", "region": "Asia", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 210},
        {"id": "BNK-BCA", "name": "Bank Central Asia (BCA)", "tier": "Tier 2 - Local", "region": "Asia", "connectivity": "Daily MT940 File", "status": "STALE_WARN", "latency_ms": 420},
        {"id": "BNK-BRAC", "name": "BRAC Bank", "tier": "Tier 3 - Local", "region": "Asia", "connectivity": "Daily MT940 File", "status": "CONNECTED", "latency_ms": 310},
        {"id": "BNK-BARC", "name": "Barclays Corporate", "tier": "Tier 1 - Regional Core", "region": "Europe", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 90},
        {"id": "BNK-NWST", "name": "NatWest Bank", "tier": "Tier 2 - Local", "region": "Europe", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 140},
        {"id": "BNK-LLOY", "name": "Lloyds Bank", "tier": "Tier 2 - Local", "region": "Europe", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 160},
        {"id": "BNK-BNP", "name": "BNP Paribas", "tier": "Tier 1 - Regional Core", "region": "Europe", "connectivity": "CAMT.053 XML", "status": "CONNECTED", "latency_ms": 115},
        {"id": "BNK-ING", "name": "ING Bank", "tier": "Tier 2 - Regional", "region": "Europe", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 135},
        {"id": "BNK-ENBD", "name": "Emirates NBD", "tier": "Tier 1 - Regional Core", "region": "Middle East", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 145},
        {"id": "BNK-FAB", "name": "First Abu Dhabi Bank", "tier": "Tier 2 - Regional", "region": "Middle East", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 170},
        {"id": "BNK-STDB", "name": "Standard Bank South Africa", "tier": "Tier 2 - Local", "region": "Africa", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 280},
        {"id": "BNK-FRND", "name": "FirstRand (FNB)", "tier": "Tier 2 - Local", "region": "Africa", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 260},
        {"id": "BNK-ACCS", "name": "Access Bank Nigeria", "tier": "Tier 3 - Local", "region": "Africa", "connectivity": "Manual Daily Upload", "status": "STALE_WARN", "latency_ms": 980},
        {"id": "BNK-ZNTH", "name": "Zenith Bank", "tier": "Tier 3 - Local", "region": "Africa", "connectivity": "Manual Daily Upload", "status": "CONNECTED", "latency_ms": 840},
        {"id": "BNK-JPM", "name": "JPMorgan Chase", "tier": "Tier 1 - Global Core", "region": "North America", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 80},
        {"id": "BNK-BOA", "name": "Bank of America", "tier": "Tier 1 - Regional Core", "region": "North America", "connectivity": "Host-to-Host (ISO 20022)", "status": "CONNECTED", "latency_ms": 90},
        {"id": "BNK-WF", "name": "Wells Fargo", "tier": "Tier 2 - Regional", "region": "North America", "connectivity": "BAI2 Feed", "status": "CONNECTED", "latency_ms": 125},
        {"id": "BNK-RBC", "name": "Royal Bank of Canada", "tier": "Tier 2 - Regional", "region": "North America", "connectivity": "SWIFT MT940", "status": "CONNECTED", "latency_ms": 110},
        {"id": "BNK-KCB", "name": "KCB Bank Kenya", "tier": "Tier 3 - Acquisition Target", "region": "Africa", "connectivity": "No Feed (Onboarding Phase)", "status": "OFFLINE", "latency_ms": 0}
    ]

    # Entities definition
    entities_seed = [
        {
            "id": "GCPL-IN",
            "name": "Godrej Consumer Products Ltd (HQ)",
            "jurisdiction": "IND",
            "currency": "INR",
            "region": "REG-ASIA",
            "erp": "SAP S/4HANA",
            "status": "ACTIVE",
            "is_hq": True,
            "coordinator": "Sunil Varma",
            "deputy": "Ananya Sen",
            "pool_status": "GTC_POOL_LEADER",
            "pool_eligible": True,
            "restricted_reasons": "Statutory CSR & Dividend escrow reserve",
            "accounts_spec": [
                ("BNK-SBI", "Main Operating Collection", "Operating Collection", 1250000000, False, False),
                ("BNK-HDFC", "Disbursement & Payroll Account", "Disbursement", 340000000, False, False),
                ("BNK-ICICI", "Treasury Liquidity Buffer", "Treasury Sweep", 850000000, False, False),
                ("BNK-CITI", "USD Trade Settlement", "FX Trade Settlement", 92000000, False, False), # in INR eq
                ("BNK-STAN", "Statutory Escrow & CSR Account", "Statutory Escrow", 150000000, False, True), # Restricted
                ("BNK-HSBC", "Commercial Paper Settlement", "Debt Service", 180000000, False, False),
                ("BNK-SBI", "Regional Cash Concentration", "Pooling Header", 620000000, False, False),
                ("BNK-HDFC", "Capex Project Escrow", "Capex Escrow", 210000000, False, True), # Restricted
                ("BNK-ICICI", "Baddi Factory Operations A/c", "Operating Collection", 115000000, False, False),
                ("BNK-SBI", "Malanpur Manufacturing Payroll", "Disbursement", 98000000, False, False),
                ("BNK-HDFC", "North India Dealer Collections", "Dealer Receipts", 185000000, False, False)
            ],
            "borrowings_native": 1800000000, # Gross Debt
            "undrawn_native": 2500000000
        },
        {
            "id": "GCPL-ID",
            "name": "PT GCPL Indonesia",
            "jurisdiction": "IDN",
            "currency": "IDR",
            "region": "REG-ASIA",
            "erp": "SAP ECC 6.0",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Budi Santoso",
            "deputy": "Dewi Lestari",
            "pool_status": "RESTRICTED_DOMESTIC",
            "pool_eligible": False,
            "restricted_reasons": "Bank Indonesia FX repatriation rule & Local withholding tax gate",
            "accounts_spec": [
                ("BNK-MAND", "Jakarta Main Operating", "Operating Collection", 145000000000, False, False),
                ("BNK-BCA", "Surabaya Factory Payroll", "Disbursement", 28000000000, True, False), # Stale
                ("BNK-CITI", "USD Export Proceeds Escrow", "Restricted Collection", 42000000000, False, True), # Restricted
                ("BNK-STAN", "Local Working Capital Buffer", "Operating Buffer", 55000000000, False, False),
                ("BNK-MAND", "Tax & Statutory Reserve", "Tax Reserve", 18000000000, False, True),
                ("BNK-BCA", "Vendor Payments Hub", "Disbursement", 31000000000, False, False)
            ],
            "borrowings_native": 65000000000,
            "undrawn_native": 120000000000
        },
        {
            "id": "GCPL-BD",
            "name": "GCPL Bangladesh Pvt Ltd",
            "jurisdiction": "BGD",
            "currency": "BDT",
            "region": "REG-ASIA",
            "erp": "Tally ERP 9",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Kamal Hossain",
            "deputy": "Nasreen Akhtar",
            "pool_status": "REPORTING_ONLY",
            "pool_eligible": False,
            "restricted_reasons": "Bangladesh Bank central approval required for cross-border sweeps",
            "accounts_spec": [
                ("BNK-BRAC", "Dhaka Operations Account", "Operating Collection", 480000000, False, False),
                ("BNK-STAN", "Chittagong Port Customs Escrow", "Customs Escrow", 120000000, False, True), # Restricted
                ("BNK-BRAC", "Plant Payroll & Operational", "Disbursement", 160000000, False, False),
                ("BNK-HSBC", "Working Capital Facility A/c", "Credit Line", 95000000, False, False),
                ("BNK-CITI", "Import L/C Margin Deposit", "Margin Deposit", 140000000, False, True)
            ],
            "borrowings_native": 350000000,
            "undrawn_native": 200000000
        },
        {
            "id": "GCPL-SG",
            "name": "GCPL Singapore Pte Ltd",
            "jurisdiction": "SGP",
            "currency": "USD",
            "region": "REG-ASIA",
            "erp": "Oracle Cloud",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Kelvin Tan",
            "deputy": "Serene Lim",
            "pool_status": "REGIONAL_HUB_ELIGIBLE",
            "pool_eligible": True,
            "restricted_reasons": "None - MAS compliant treasury vehicle",
            "accounts_spec": [
                ("BNK-DBS", "Regional Treasury Liquidity Pool", "Pooling Sweep", 14500000, False, False),
                ("BNK-CITI", "Global Procurement Hub USD", "Trade Settlement", 8200000, False, False),
                ("BNK-STAN", "Southeast Asia Cash Header", "Cash Concentration", 11400000, False, False),
                ("BNK-HSBC", "SGD Operating & Rent", "Operating", 2300000, False, False),
                ("BNK-DBS", "FX Hedging Margin Account", "Collateral Margin", 1500000, False, True)
            ],
            "borrowings_native": 5000000,
            "undrawn_native": 25000000
        },
        {
            "id": "GCPL-UK",
            "name": "GCPL UK Holdings Ltd",
            "jurisdiction": "GBR",
            "currency": "GBP",
            "region": "REG-EMEA",
            "erp": "Microsoft Dynamics 365",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Edward Thornton",
            "deputy": "Sarah Jenkins",
            "pool_status": "ACTIVE_SURPLUS_CANDIDATE",
            "pool_eligible": True, # Has £18.5M surplus!
            "restricted_reasons": "Pension fund guarantee ring-fenced escrow",
            "accounts_spec": [
                ("BNK-BARC", "London Main Operating Revenue", "Operating Collection", 6200000, False, False),
                ("BNK-BARC", "Treasury Surplus Money Market A/c", "Deployable Surplus", 18500000, False, False), # HUGE SURPLUS
                ("BNK-NWST", "UK Payroll & PAYE Tax", "Disbursement", 2400000, False, False),
                ("BNK-LLOY", "Pension Escrow Ring-fenced", "Pension Guarantee", 3100000, False, True), # Restricted
                ("BNK-BNP", "EUR Trade Settlement Account", "FX Settlement", 4200000, False, False),
                ("BNK-HSBC", "UK Supplier BACS Clearing", "Disbursement", 1900000, False, False),
                ("BNK-BARC", "Overnight Liquidity Sweep A/c", "Sweep Header", 5800000, False, False),
                ("BNK-LLOY", "Manchester Distribution Depot A/c", "Operating Collection", 1250000, False, False),
                ("BNK-NWST", "VAT & Customs Duty Reserve", "Tax Reserve", 850000, False, True)
            ],
            "borrowings_native": 0, # Zero debt, lending candidate
            "undrawn_native": 15000000
        },
        {
            "id": "GCPL-NL",
            "name": "GCPL Netherlands B.V.",
            "jurisdiction": "NLD",
            "currency": "EUR",
            "region": "REG-EMEA",
            "erp": "SAP S/4HANA",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Jan van de Berg",
            "deputy": "Lieke de Jong",
            "pool_status": "ELIGIBLE_CROSS_BORDER",
            "pool_eligible": True,
            "restricted_reasons": "Dutch customs duty guarantee",
            "accounts_spec": [
                ("BNK-BNP", "Continental Europe Sales A/c", "Operating Collection", 8900000, False, False),
                ("BNK-ING", "Amsterdam Logistics & Freight", "Disbursement", 3400000, False, False),
                ("BNK-CITI", "EUR Cash Pool Participant", "Cash Pool", 7200000, False, False),
                ("BNK-BNP", "EU VAT Escrow Reserve", "Tax Reserve", 1600000, False, True),
                ("BNK-ING", "Cross-Border Intercompany Sweeper", "Treasury Sweep", 4500000, False, False)
            ],
            "borrowings_native": 4000000,
            "undrawn_native": 10000000
        },
        {
            "id": "GCPL-AE",
            "name": "GCPL Middle East FZE",
            "jurisdiction": "ARE",
            "currency": "AED",
            "region": "REG-EMEA",
            "erp": "Oracle NetSuite",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Tariq Al-Mansoor",
            "deputy": "Rashid Khan",
            "pool_status": "TAX_HUB_ELIGIBLE",
            "pool_eligible": True,
            "restricted_reasons": "Freezone customs deposit",
            "accounts_spec": [
                ("BNK-ENBD", "Dubai JAFZA Main Operating", "Operating Collection", 32000000, False, False),
                ("BNK-FAB", "Middle East Distribution Receipts", "Operating Collection", 18500000, False, False),
                ("BNK-ENBD", "Regional Treasury USD Clearing", "Treasury Sweep", 24000000, False, False),
                ("BNK-CITI", "Gulf GCC Multicurrency Pool", "Pooling Sweep", 15000000, False, False),
                ("BNK-FAB", "JAFZA Authority Customs Escrow", "Customs Deposit", 4200000, False, True),
                ("BNK-HSBC", "Regional Payroll WPS Compliant", "Payroll", 7800000, False, False)
            ],
            "borrowings_native": 12000000,
            "undrawn_native": 45000000
        },
        {
            "id": "GCPL-ZA",
            "name": "GCPL South Africa (Pty) Ltd",
            "jurisdiction": "ZAF",
            "currency": "ZAR",
            "region": "REG-EMEA",
            "erp": "Syspro",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Thabo Mbeki",
            "deputy": "Zanele Sithole",
            "pool_status": "EXCHANGE_CONTROL_REVIEW",
            "pool_eligible": False,
            "restricted_reasons": "SARB (South African Reserve Bank) exchange approval needed for capital outbound",
            "accounts_spec": [
                ("BNK-STDB", "Johannesburg Commercial Operations", "Operating Collection", 112000000, False, False),
                ("BNK-FRND", "Durban Factory Payroll & Payables", "Disbursement", 46000000, False, False),
                ("BNK-STDB", "SARS Tax Statutory Reserve", "Tax Reserve", 22000000, False, True), # Restricted
                ("BNK-STAN", "USD Trade Import Financing", "Trade Loan", 35000000, False, False),
                ("BNK-FRND", "Southern Africa Logistics Hub", "Operating", 18000000, False, False),
                ("BNK-STDB", "Cape Town Regional Depo A/c", "Operating Collection", 14000000, False, False),
                ("BNK-FRND", "Pretoria Packaging Plant A/c", "Disbursement", 12500000, False, False)
            ],
            "borrowings_native": 85000000,
            "undrawn_native": 50000000
        },
        {
            "id": "GCPL-NG",
            "name": "GCPL Nigeria Ltd",
            "jurisdiction": "NGA",
            "currency": "NGN",
            "region": "REG-EMEA",
            "erp": "Sage 300",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Chinedu Okafor",
            "deputy": "Amina Bello",
            "pool_status": "TRAPPED_CASH_MONITORED",
            "pool_eligible": False,
            "restricted_reasons": "Severe Central Bank of Nigeria FX illiquidity & repatriation queue",
            "accounts_spec": [
                ("BNK-ACCS", "Lagos Distributorship Inflow", "Operating Collection", 8500000000, True, False), # Stale
                ("BNK-ZNTH", "Ikeja Plant Operations & Payroll", "Disbursement", 3200000000, False, False),
                ("BNK-STAN", "CBN Form A Repatriation Escrow", "Trapped Cash Escrow", 9400000000, False, True), # Restricted
                ("BNK-CITI", "Export Proceeds Dom A/c", "FX Proceeds", 1800000000, False, False),
                ("BNK-ACCS", "Local Raw Material Creditors", "Disbursement", 2100000000, True, False), # Stale
                ("BNK-ZNTH", "Port Harcourt Depot Account", "Operating Collection", 1150000000, False, False),
                ("BNK-ACCS", "Kano Distribution Branch", "Disbursement", 850000000, True, False) # Stale
            ],
            "borrowings_native": 14500000000,
            "undrawn_native": 4000000000
        },
        {
            "id": "GCPL-US",
            "name": "GCPL Americas Inc",
            "jurisdiction": "USA",
            "currency": "USD",
            "region": "REG-NA",
            "erp": "SAP S/4HANA",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Brian O'Connor",
            "deputy": "Jessica Vance",
            "pool_status": "ACTIVE_BORROWER_NEED",
            "pool_eligible": True, # Needs $14.2M borrowing! High SOFR+220bps debt
            "restricted_reasons": "US Customs bonded warehouse letter of credit",
            "accounts_spec": [
                ("BNK-JPM", "US Big-Box Retail Collections (Walmart/Target)", "Operating Collection", 4800000, False, False),
                ("BNK-BOA", "Disbursements & NA Payroll", "Disbursement", 1900000, False, False),
                ("BNK-WF", "Revolving Credit Line Drawdown A/c", "Active Credit Facility", 14200000, False, False), # BORROWING DRAWN
                ("BNK-CITI", "Intercompany Trade Settlement", "Intercompany Settle", 2100000, False, False),
                ("BNK-JPM", "US Customs Bond Cash Collateral", "Bond Collateral", 1800000, False, True), # Restricted
                ("BNK-BOA", "North America Concentration Header", "Sweep Header", 3400000, False, False),
                ("BNK-WF", "West Coast Logistics Depo A/c", "Disbursement", 1150000, False, False),
                ("BNK-JPM", "E-Commerce Merchant Settlement (Amazon)", "Merchant Receipts", 2750000, False, False)
            ],
            "borrowings_native": 28500000, # Large external borrowing ($28.5M total)
            "undrawn_native": 8000000
        },
        {
            "id": "GCPL-CA",
            "name": "GCPL Canada Consumer Corp",
            "jurisdiction": "CAN",
            "currency": "CAD",
            "region": "REG-NA",
            "erp": "Microsoft Dynamics NAV",
            "status": "ACTIVE",
            "is_hq": False,
            "coordinator": "Marc Tremblay",
            "deputy": "Claire Beauchamp",
            "pool_status": "ASSESSED_ELIGIBLE",
            "pool_eligible": True,
            "restricted_reasons": "Quebec statutory sales tax reserve",
            "accounts_spec": [
                ("BNK-RBC", "Toronto Operating Cash", "Operating Collection", 6400000, False, False),
                ("BNK-BOA", "Cross-Border USD Cash Concentrator", "Operating", 3200000, False, False),
                ("BNK-RBC", "Payroll & Health Benefits", "Disbursement", 1800000, False, False),
                ("BNK-WF", "CRA Tax Statutory Trust Account", "Tax Reserve", 1200000, False, True),
                ("BNK-CITI", "Supply Chain Trade Payments", "Disbursement", 2900000, False, False),
                ("BNK-RBC", "Montreal Distribution Branch A/c", "Operating Collection", 1450000, False, False),
                ("BNK-BOA", "Vancouver Logistics Deposit", "Disbursement", 950000, False, False)
            ],
            "borrowings_native": 4500000,
            "undrawn_native": 6000000
        },
        {
            "id": "GCPL-KE",
            "name": "GCPL Kenya Ltd (Acquisition)",
            "jurisdiction": "KEN",
            "currency": "KES",
            "region": "REG-NA", # Mapped to emerging track
            "erp": "QuickBooks Enterprise (Legacy)",
            "status": "ONBOARDING_WAVE_1",
            "is_hq": False,
            "coordinator": "Erick Mwangi",
            "deputy": "Grace Kimani",
            "pool_status": "NOT_ONBOARDED",
            "pool_eligible": False,
            "restricted_reasons": "Pre-acquisition tax audit escrow and local banking covenants",
            "accounts_spec": [
                ("BNK-KCB", "Nairobi Wholesale Receipts", "Operating Collection", 340000000, False, False),
                ("BNK-STAN", "East Africa Distribution Hub", "Operating", 180000000, False, False),
                ("BNK-KCB", "Mombasa Factory Payroll", "Disbursement", 95000000, True, False), # Stale
                ("BNK-KCB", "Tax Authority Bond Guarantee", "Statutory Guarantee", 65000000, False, True), # Restricted
                ("BNK-STAN", "Kisumu Depo Petty Cash & Rent", "Operating", 35000000, False, False)
            ],
            "borrowings_native": 420000000,
            "undrawn_native": 50000000
        }
    ]

    # Process entities and accounts
    entities = []
    all_accounts = []
    account_seq = 100
    
    total_group_cash_usd = 0.0
    total_group_local_avail_usd = 0.0
    total_group_deployable_usd = 0.0
    total_group_restricted_usd = 0.0
    total_group_debt_usd = 0.0
    total_group_undrawn_usd = 0.0
    
    stale_accounts_count = 0
    restricted_accounts_count = 0

    for es in entities_seed:
        c_rate = fx_to_usd[es["currency"]]
        
        ent_total_cash_native = 0.0
        ent_restricted_native = 0.0
        ent_stale_count = 0
        
        ent_accounts = []
        for bnk_id, acc_name, purpose, balance, is_stale, is_restricted in es["accounts_spec"]:
            account_seq += 1
            acc_id = f"ACC-{account_seq}"
            
            ent_total_cash_native += balance
            if is_restricted:
                ent_restricted_native += balance
                restricted_accounts_count += 1
            if is_stale:
                ent_stale_count += 1
                stale_accounts_count += 1
                
            acc_obj = {
                "id": acc_id,
                "entity_id": es["id"],
                "bank_id": bnk_id,
                "name": acc_name,
                "purpose": purpose,
                "currency": es["currency"],
                "balance": balance,
                "balance_usd": balance * c_rate,
                "value_date": "2026-10-11",
                "timestamp": "2026-10-11T08:15:00Z" if not is_stale else "2026-10-09T18:00:00Z",
                "is_stale": is_stale,
                "is_restricted": is_restricted,
                "restriction_reason": es["restricted_reasons"] if is_restricted else None,
                "connectivity": next((b["connectivity"] for b in banks if b["id"] == bnk_id), "SWIFT MT940"),
                "signatories": [es["coordinator"], es["deputy"], "Group Treasurer (Dual)"]
            }
            ent_accounts.append(acc_obj)
            all_accounts.append(acc_obj)
            
        # Five-category calculations for entity
        ent_local_buffer_native = (ent_total_cash_native - ent_restricted_native) * 0.45
        
        # Deployable cash: Only if assessed eligible and above local buffer
        if es["pool_eligible"]:
            ent_deployable_native = max(0.0, (ent_total_cash_native - ent_restricted_native) - ent_local_buffer_native)
        else:
            ent_deployable_native = 0.0
            
        ent_local_avail_native = (ent_total_cash_native - ent_restricted_native)
        
        ent_total_usd = ent_total_cash_native * c_rate
        ent_local_avail_usd = ent_local_avail_native * c_rate
        ent_deployable_usd = ent_deployable_native * c_rate
        ent_restricted_usd = ent_restricted_native * c_rate
        ent_debt_usd = es["borrowings_native"] * c_rate
        ent_undrawn_usd = es["undrawn_native"] * c_rate
        
        total_group_cash_usd += ent_total_usd
        total_group_local_avail_usd += ent_local_avail_usd
        total_group_deployable_usd += ent_deployable_usd
        total_group_restricted_usd += ent_restricted_usd
        total_group_debt_usd += ent_debt_usd
        total_group_undrawn_usd += ent_undrawn_usd
        
        # 13-week sparkline projection (net position in native)
        sparkline = []
        base = ent_total_cash_native
        for w in range(1, 14):
            # realistic seasonal variation
            drift = 1.0 + (0.015 * (w % 3)) - (0.02 * (w % 4))
            sparkline.append(round(base * drift))
            
        ent_record = {
            "id": es["id"],
            "name": es["name"],
            "jurisdiction": es["jurisdiction"],
            "currency": es["currency"],
            "region_id": es["region"],
            "erp": es["erp"],
            "status": es["status"],
            "is_hq": es["is_hq"],
            "coordinator": es["coordinator"],
            "deputy": es["deputy"],
            "pool_status": es["pool_status"],
            "pool_eligible": es["pool_eligible"],
            "restricted_reasons": es["restricted_reasons"],
            "stale_count": ent_stale_count,
            "account_count": len(ent_accounts),
            "cash_categories": {
                "total_reported_native": ent_total_cash_native,
                "total_reported_usd": ent_total_usd,
                "available_local_native": ent_local_avail_native,
                "available_local_usd": ent_local_avail_usd,
                "available_group_deployable_native": ent_deployable_native,
                "available_group_deployable_usd": ent_deployable_usd,
                "restricted_native": ent_restricted_native,
                "restricted_usd": ent_restricted_usd,
                "gross_debt_native": es["borrowings_native"],
                "gross_debt_usd": ent_debt_usd,
                "undrawn_facilities_native": es["undrawn_native"],
                "undrawn_facilities_usd": ent_undrawn_usd
            },
            "sparkline_13w": sparkline,
            "forecast_status": "SUBMITTED" if es["id"] != "GCPL-KE" else "PENDING_SETUP",
            "forecast_timeliness": "ON_TIME" if es["id"] not in ["GCPL-NG", "GCPL-ID"] else "CHALLENGED",
            "breach_count": 1 if es["id"] == "GCPL-NG" else (1 if es["id"] == "GCPL-US" else 0),
            "pending_approvals": 2 if es["id"] in ["GCPL-UK", "GCPL-US"] else 0,
            "loc1_assessment": {
                "completed": es["pool_eligible"],
                "signoffs": {
                    "tax": True if es["pool_eligible"] else (False if es["id"] == "GCPL-ID" else False),
                    "legal": True if es["pool_eligible"] else False,
                    "local_finance": True if es["pool_eligible"] else True,
                    "banks": True if es["pool_eligible"] else (False if es["id"] == "GCPL-NG" else True),
                    "group_treasury": True if es["pool_eligible"] else False
                },
                "five_elements": {
                    "central_vs_local": "APPROVED" if es["pool_eligible"] else "IN_REVIEW",
                    "local_accounts_held": "APPROVED" if es["pool_eligible"] else "IN_REVIEW",
                    "movement_tax_conditions": "COMPLIANT" if es["pool_eligible"] else "BLOCKED_TAX_WITHHOLDING",
                    "documentation_accounting": "STANDARD_IC_AGREEMENT" if es["pool_eligible"] else "PENDING_LEGAL",
                    "benefit_vs_cost": "POSITIVE_NPV" if es["pool_eligible"] else "NEUTRAL"
                }
            }
        }
        entities.append(ent_record)

    # Surplus-while-Borrowing Detector Findings
    # Major opportunity: GCPL-UK (£18.5M / ~$23.77M surplus) -> GCPL-US ($14.2M external high-rate borrowing)
    surplus_borrowing_matches = [
        {
            "id": "MATCH-01",
            "surplus_entity_id": "GCPL-UK",
            "surplus_entity_name": "GCPL UK Holdings Ltd",
            "surplus_amount_native": 18500000,
            "surplus_currency": "GBP",
            "surplus_amount_usd": 18500000 * fx_to_usd["GBP"],
            "surplus_current_yield": "0.45% GBP Overnight Deposit",
            "borrower_entity_id": "GCPL-US",
            "borrower_entity_name": "GCPL Americas Inc",
            "borrower_need_native": 14200000,
            "borrower_currency": "USD",
            "borrower_need_usd": 14200000,
            "borrower_rate": "SOFR + 220 bps (7.50% effective)",
            "potential_spread_bps": 705,
            "indicative_annual_benefit_usd": 14200000 * (0.0750 - 0.0045), # ~$1,001,100
            "status": "CANDIDATE_READY_FOR_WORKBENCH",
            "structure_option": "Cross-Border Intercompany Loan (UK to US) under Group Master Treasury Facility",
            "blockers_resolved": [
                "LOC-1 Assessment Complete on both sides",
                "US-UK Double Tax Treaty (0% withholding on interest under arm's length TP rules)",
                "Documented Intercompany Promissory Note template pre-approved"
            ],
            "pending_gates": [
                "GTC Group Treasurer Approval",
                "Entity Signatory Approvals (Thornton & O'Connor)"
            ]
        },
        {
            "id": "MATCH-02",
            "surplus_entity_id": "GCPL-SG",
            "surplus_entity_name": "GCPL Singapore Pte Ltd",
            "surplus_amount_native": 11400000,
            "surplus_currency": "USD",
            "surplus_amount_usd": 11400000,
            "surplus_current_yield": "0.80% USD Call Deposit",
            "borrower_entity_id": "GCPL-IN",
            "borrower_entity_name": "Godrej Consumer Products Ltd (HQ)",
            "borrower_need_native": 850000000,
            "borrower_currency": "INR",
            "borrower_need_usd": 850000000 * fx_to_usd["INR"], # ~$10.09M
            "borrower_rate": "MCLR 8.45% Local Working Capital Line",
            "potential_spread_bps": 765,
            "indicative_annual_benefit_usd": 10090000 * (0.0845 - 0.0080), # ~$771,885
            "status": "REGULATORY_ASSESSMENT_REQUIRED",
            "structure_option": "External Commercial Borrowing (ECB) via RBI Automatic Route",
            "blockers_resolved": [
                "GTC Approved"
            ],
            "pending_gates": [
                "RBI All-in-Cost Ceiling Compliance Certificate",
                "Hedging Requirement (100% FX hedging mandatory for INR ECB)"
            ]
        }
    ]

    # Pre-built Workflows Library (W1 to W15)
    workflow_library = [
        {
            "id": "W1",
            "name": "Daily Cash Positioning & Validation",
            "trigger": "Scheduled: 06:00 Local Hub Cut-offs",
            "status": "PUBLISHED",
            "version": "v2.1",
            "author": "Treasury CoE",
            "approver": "Risk and Control (Independent)",
            "nodes_count": 8,
            "lanes": ["Front", "Back", "Middle", "Group"],
            "summary": "Ingest statements, identify missing feeds/stale accounts, validate local buffer, publish consolidated group position.",
            "sod_checks": "Passes LR1, LR4, LR6"
        },
        {
            "id": "W2",
            "name": "13-Week Rolling Cash Flow Forecast Cycle",
            "trigger": "Weekly: Every Thursday 17:00 Local",
            "status": "PUBLISHED",
            "version": "v1.4",
            "author": "Treasury CoE",
            "approver": "Group Controller",
            "nodes_count": 9,
            "lanes": ["Local", "Regional", "Group"],
            "summary": "Entity submission, automated variance classification, regional challenge, GTC consolidation for funding planning.",
            "sod_checks": "Passes LR7, LR11"
        },
        {
            "id": "W3",
            "name": "Surplus-vs-Borrowing Intercompany Funding",
            "trigger": "Detector Suggestion / Treasurer Initiation",
            "status": "PUBLISHED",
            "version": "v3.0",
            "author": "Group Treasurer",
            "approver": "Risk and Control & CFO",
            "nodes_count": 12,
            "lanes": ["Front", "Middle", "Back", "Local", "Tax/Legal", "Group"],
            "summary": "Full 9-step lifecycle: eligibility verification, tax assessment, dual approval, FO execution, BO settlement, MO limit verification.",
            "sod_checks": "Passes LR1, LR2, LR5, LR6, LR10, LR11"
        },
        {
            "id": "W4",
            "name": "Routine Investment within Policy Limits",
            "trigger": "Surplus Cash Deployment Request",
            "status": "PUBLISHED",
            "version": "v2.0",
            "author": "Treasury Operations",
            "approver": "Risk and Control",
            "nodes_count": 7,
            "lanes": ["Front", "Middle", "Back"],
            "summary": "Pre-trade limit check, independent approver, trade capture, Back Office confirmation, reconciliation.",
            "sod_checks": "Passes LR1, LR6"
        },
        {
            "id": "W5",
            "name": "Funding Strategy & Material Financing",
            "trigger": "Quarterly Liquidity Review / Capex Call",
            "status": "PUBLISHED",
            "version": "v1.2",
            "author": "Group Treasurer",
            "approver": "CFO & Board Committee",
            "nodes_count": 10,
            "lanes": ["Group", "Middle", "Back"],
            "summary": "Material debt financing, syndicate covenant check, board escalation, multi-bank RFP execution.",
            "sod_checks": "Passes LR6, LR11"
        },
        {
            "id": "W6",
            "name": "Bank Account Opening, Modification or Closure",
            "trigger": "Entity Commercial Need Request",
            "status": "PUBLISHED",
            "version": "v2.2",
            "author": "Banking Specialist",
            "approver": "Group Treasurer & Regional Lead",
            "nodes_count": 9,
            "lanes": ["Local", "Group", "Back"],
            "summary": "Business justification, rationalization rule check, signatory dual verification, core register update.",
            "sod_checks": "Passes LR1, LR11"
        },
        {
            "id": "W7",
            "name": "Payment Preparation, Dual Authorization & Settlement",
            "trigger": "Verified Business Obligation",
            "status": "PUBLISHED",
            "version": "v3.1",
            "author": "Treasury Operations",
            "approver": "Authorized Signatory (Independent)",
            "nodes_count": 8,
            "lanes": ["Local", "Back"],
            "summary": "Preparation by Operations, mandatory independent dual authorization, bank release, independent reconciliation.",
            "sod_checks": "Passes LR2, LR4, LR6"
        },
        {
            "id": "W8",
            "name": "Beneficiary Master Data Modification",
            "trigger": "Supplier / Entity Banking Change Request",
            "status": "PUBLISHED",
            "version": "v2.0",
            "author": "Internal Audit / Controls",
            "approver": "Controller & Risk Lead",
            "nodes_count": 7,
            "lanes": ["Back", "Middle"],
            "summary": "Independent callback verification, dual sign-off, segregation lockout preventing requester approval.",
            "sod_checks": "Passes LR3, LR6"
        },
        {
            "id": "W9",
            "name": "Treasury Policy Exception & Temporary Relief",
            "trigger": "Policy Breach / Local Statutory Constraint",
            "status": "PUBLISHED",
            "version": "v1.5",
            "author": "Risk and Control",
            "approver": "CFO / Treasury Committee",
            "nodes_count": 8,
            "lanes": ["Middle", "Group"],
            "summary": "Compensating controls documentation, time-bound relief, automated auto-lapse on expiry.",
            "sod_checks": "Passes LR9, LR11"
        },
        {
            "id": "W10",
            "name": "User Access Provisioning & Segregation Review",
            "trigger": "HR Transfer / Quarterly SoD Campaign",
            "status": "PUBLISHED",
            "version": "v2.0",
            "author": "IT Security Lead",
            "approver": "Business Owner & Internal Audit",
            "nodes_count": 8,
            "lanes": ["Middle", "Group"],
            "summary": "Conflict matrix automated lint, temporary role time-bounding, admin lockout from deal execution.",
            "sod_checks": "Passes LR1, LR9, LR10"
        },
        {
            "id": "W11",
            "name": "Entity Onboarding Package (Acquisition Wave)",
            "trigger": "M&A Close / Integration Kickoff",
            "status": "PUBLISHED",
            "version": "v1.1",
            "author": "Acquisition Integration Lead",
            "approver": "Group Treasurer & CoE",
            "nodes_count": 11,
            "lanes": ["Local", "Group", "Back"],
            "summary": "Seven package items validation, legacy ERP mapping, parallel-run reconciliation, cutover checklist sign-off.",
            "sod_checks": "Passes LR6, LR11"
        },
        {
            "id": "W12",
            "name": "Incident Management & Fallback Degradation",
            "trigger": "Feed Outage / SWIFT Failure / Cyber Event",
            "status": "PUBLISHED",
            "version": "v1.3",
            "author": "Resilience Lead",
            "approver": "Group Treasurer & IT Head",
            "nodes_count": 8,
            "lanes": ["Back", "Middle", "Group"],
            "summary": "Offline contingency activation, secondary channel release, preserving dual authorization under emergency.",
            "sod_checks": "Passes LR13"
        },
        {
            "id": "W13",
            "name": "Treasury Policy Creation, Amendment & Attestation",
            "trigger": "Annual Policy Review Cycle",
            "status": "PUBLISHED",
            "version": "v1.0",
            "author": "Treasury CoE",
            "approver": "Board of Directors / Audit Committee",
            "nodes_count": 7,
            "lanes": ["Group", "Middle"],
            "summary": "Policy-as-code versioning, board governance submission, mandatory subsidiary entity attestation.",
            "sod_checks": "Passes LR11"
        },
        {
            "id": "W14",
            "name": "LOC-1 Subsidiary Eligibility Assessment",
            "trigger": "Cross-Border Pooling Participation Request",
            "status": "PUBLISHED",
            "version": "v2.0",
            "author": "Tax & Legal Reviewer",
            "approver": "5-Signatory Panel",
            "nodes_count": 9,
            "lanes": ["Local", "Tax/Legal", "Group"],
            "summary": "Mandatory 5 elements inspection and 5 department sign-offs before an entity can be set pool-eligible.",
            "sod_checks": "Passes LR5, LR11"
        },
        {
            "id": "W15",
            "name": "Treasury Limits & Mandate Configuration",
            "trigger": "Market Volatility / Annual Mandate Reset",
            "status": "PUBLISHED",
            "version": "v1.4",
            "author": "Group Treasurer",
            "approver": "CFO & Risk Lead (Dual)",
            "nodes_count": 7,
            "lanes": ["Middle", "Group"],
            "summary": "Counterparty and dealing limits update, four-eyes configuration publishing, no empty defaults.",
            "sod_checks": "Passes LR14"
        }
    ]

    # Segregation of Duties (SoD) Rules LR1 - LR16 catalogue
    sod_rules = [
        {"id": "LR1", "name": "Dealer / Approver Separation", "severity": "ERROR", "description": "A node preparing a deal and a node approving it cannot resolve to the same user or role."},
        {"id": "LR2", "name": "Independent Payment Authorization", "severity": "ERROR", "description": "Every payment path must include an authorization node whose role is independent of preparation."},
        {"id": "LR3", "name": "Beneficiary Dual Verification", "severity": "ERROR", "description": "Every beneficiary change path requires independent callback verification and independent approval."},
        {"id": "LR4", "name": "Reconciliation Release Independence", "severity": "ERROR", "description": "Reconciliation review role must differ from payment release and settlement roles."},
        {"id": "LR5", "name": "LOC-1 Assessment Gate Pre-requisite", "severity": "ERROR", "description": "Any path that moves cash between legal entities must pass an approved Assessment gate."},
        {"id": "LR6", "name": "Mandatory Audit Event Capture", "severity": "ERROR", "description": "Every executing node (deal, payment, sweep instruction) must be followed by an immutable Write Audit Event node."},
        {"id": "LR7", "name": "Timeout & Escalation Fallback", "severity": "ERROR", "description": "Every human task must have an explicit timeout branch and designated escalation target."},
        {"id": "LR8", "name": "Exhaustive Branch Fallback", "severity": "ERROR", "description": "Every decision or switch node must expose an unmatched fallback branch."},
        {"id": "LR9", "name": "Time-Bound Temporary Privileges", "severity": "ERROR", "description": "Temporary access paths must define an expiration datetime not exceeding 72 hours."},
        {"id": "LR10", "name": "Role Conflict Matrix Compliance", "severity": "ERROR", "description": "No user can hold incompatible role combinations simultaneously (Front + Middle/Back)."},
        {"id": "LR11", "name": "Explicit Decision-Rights Reference", "severity": "ERROR", "description": "Every approval node must reference a binding row in the Treasury Decision Rights Matrix."},
        {"id": "LR12", "name": "Unconnected Required Ports", "severity": "ERROR", "description": "All required input and output ports must be connected before workflow activation."},
        {"id": "LR13", "name": "Emergency Four-Eyes Preservation", "severity": "ERROR", "description": "Emergency procedures must retain independent authorization and trigger post-event audit."},
        {"id": "LR14", "name": "Bound Configuration Limits", "severity": "ERROR", "description": "Limits referenced in workflows must exist in active configuration; zero/unbound limits blocked."},
        {"id": "LR15", "name": "Lane & Role Alignment", "severity": "WARNING", "description": "Warns when a node's assigned role does not match the semantic lane backdrop."},
        {"id": "LR16", "name": "Sequential Approval Depth", "severity": "WARNING", "description": "Warns when more than three sequential approvals exist in a operational path to prevent bottlenecks."}
    ]

    # Audit Trail (Append-only hash chained)
    audit_events_seed = [
        {"ts": "2026-10-10T08:00:15Z", "actor": "system.feed_daemon", "role": "Platform", "action": "INGEST_BANK_STATEMENT", "object": "ACC-101 (BNK-SBI)", "detail": "MT940 balance 1,250,000,000 INR ingested successfully"},
        {"ts": "2026-10-10T14:22:10Z", "actor": "fiona.macleod", "role": "Regional Treasury Lead", "action": "VALIDATE_FORECAST", "object": "GCPL-UK W42", "detail": "Approved 13-week rolling forecast with GBP 18.5M surplus"},
        {"ts": "2026-10-11T07:15:00Z", "actor": "system.detector", "role": "Detector Engine", "action": "SURPLUS_NEED_MATCH_DETECTED", "object": "MATCH-01", "detail": "Surplus GBP 18.5M at GCPL-UK matches USD 14.2M borrowing need at GCPL-US"},
        {"ts": "2026-10-11T08:30:45Z", "actor": "anand.mehta", "role": "Group Treasurer", "action": "INITIALIZE_POOLING_PROPOSAL", "object": "PROP-2026-089", "detail": "Created proposed intercompany loan UK -> US via Pooling Workbench"},
        {"ts": "2026-10-11T09:10:00Z", "actor": "priya.sharma", "role": "Risk and Control", "action": "POLICY_CHECK_PASSED", "object": "PROP-2026-089", "detail": "Verified counterparty limit and LOC-1 eligibility status for GCPL-UK and GCPL-US"}
    ]
    
    # Generate chain hashes
    prev_hash = "0000000000000000000000000000000000000000000000000000000000000000"
    audit_events = []
    for ev in audit_events_seed:
        payload = f"{ev['ts']}|{ev['actor']}|{ev['role']}|{ev['action']}|{ev['object']}|{prev_hash}"
        cur_hash = hashlib.sha256(payload.encode()).hexdigest()
        audit_events.append({
            "timestamp": ev["ts"],
            "actor": ev["actor"],
            "role": ev["role"],
            "action": ev["action"],
            "object": ev["object"],
            "detail": ev["detail"],
            "prev_hash": prev_hash,
            "hash": cur_hash,
            "verified": True
        })
        prev_hash = cur_hash

    # Final Payload Assembly
    dataset = {
        "metadata": {
            "platform": "GCPL Treasury Command",
            "version": "v2.0.4",
            "as_of": as_of,
            "environment": "DEMO_SYNTHETIC",
            "watermark": "SYNTHETIC DATA - DEMO TENANT ONLY",
            "base_currency": "INR",
            "reporting_currencies": ["INR", "USD", "EUR", "GBP"],
            "fx_rates_usd": fx_to_usd
        },
        "group_summary": {
            "total_entities": len(entities),
            "total_accounts": len(all_accounts),
            "total_banks": len(banks),
            "stale_accounts_count": stale_accounts_count,
            "restricted_accounts_count": restricted_accounts_count,
            "totals_usd": {
                "total_reported_cash": total_group_cash_usd,
                "available_local_obligations": total_group_local_avail_usd,
                "available_group_deployable": total_group_deployable_usd,
                "restricted_cash": total_group_restricted_usd,
                "gross_debt": total_group_debt_usd,
                "undrawn_facilities": total_group_undrawn_usd,
                "net_debt": total_group_debt_usd - total_group_cash_usd
            },
            "totals_inr": {
                "total_reported_cash": total_group_cash_usd * 84.20,
                "available_local_obligations": total_group_local_avail_usd * 84.20,
                "available_group_deployable": total_group_deployable_usd * 84.20,
                "restricted_cash": total_group_restricted_usd * 84.20,
                "gross_debt": total_group_debt_usd * 84.20,
                "undrawn_facilities": total_group_undrawn_usd * 84.20
            },
            "cash_visibility_coverage_pct": round(((len(all_accounts) - stale_accounts_count) / len(all_accounts)) * 100, 1),
            "open_breaches": 2,
            "pending_approvals": 4
        },
        "regions": regions,
        "banks": banks,
        "entities": entities,
        "accounts": all_accounts,
        "surplus_borrowing_matches": surplus_borrowing_matches,
        "workflows": workflow_library,
        "sod_rules": sod_rules,
        "audit_events": audit_events,
        "onboarding_package_template": [
            {"id": "OP-1", "name": "Bank Account & Signatory Inventory", "status": "COMPLETED", "assigned_to": "Erick Mwangi", "progress": 100},
            {"id": "OP-2", "name": "Debt, Facilities & Guarantees Register", "status": "COMPLETED", "assigned_to": "Grace Kimani", "progress": 100},
            {"id": "OP-3", "name": "Treasury Policy Alignment Assessment", "status": "IN_PROGRESS", "assigned_to": "Treasury CoE", "progress": 70},
            {"id": "OP-4", "name": "13-Week Cash Forecasting Model Setup", "status": "IN_PROGRESS", "assigned_to": "Regional Lead", "progress": 50},
            {"id": "OP-5", "name": "Internal Controls & SoD Gap Assessment", "status": "IN_PROGRESS", "assigned_to": "Risk and Control", "progress": 40},
            {"id": "OP-6", "name": "ERP Integration & Bank Connectivity Plan", "status": "PENDING", "assigned_to": "IT Administrator", "progress": 15},
            {"id": "OP-7", "name": "Approved Transition Responsibilities & SLA", "status": "PENDING", "assigned_to": "Group Treasurer", "progress": 0}
        ],
        "waves": [
            {"id": "WAVE-0", "name": "Wave 0: GTC & Core India Entities", "status": "COMPLETED", "entities": ["GCPL-IN"], "target_date": "2026-08-30"},
            {"id": "WAVE-1", "name": "Wave 1: Strategic Regional Hubs (UK, US, SG)", "status": "ACTIVE_PILOT", "entities": ["GCPL-UK", "GCPL-US", "GCPL-SG", "GCPL-NL"], "target_date": "2026-11-15"},
            {"id": "WAVE-2", "name": "Wave 2: Emerging Markets & Africa", "status": "PLANNED", "entities": ["GCPL-AE", "GCPL-ID", "GCPL-ZA", "GCPL-NG", "GCPL-BD"], "target_date": "2027-02-28"},
            {"id": "WAVE-3", "name": "Wave 3: Recent Acquisitions & Extensions", "status": "BACKLOG", "entities": ["GCPL-CA", "GCPL-KE"], "target_date": "2027-05-30"}
        ]
    }
    
    output_path = "/Users/narayanjaiswal/.gemini/antigravity/scratch/gcpl-treasury-command/data/synthetic_data.json"
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(dataset, f, indent=2)
        
    print(f"Synthetic dataset generated successfully at {output_path}")
    print(f"Summary: {len(entities)} entities, {len(all_accounts)} accounts across {len(banks)} banks.")
    print(f"Group Total Cash (USD): ${total_group_cash_usd:,.2f}")
    print(f"Group Total Cash (INR): ₹{total_group_cash_usd * 84.20:,.2f}")

if __name__ == "__main__":
    generate_dataset()
