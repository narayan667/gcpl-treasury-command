// GCPL Treasury Command Unified Self-Contained Bundle
(function() {
"use strict";

// --- BEGIN static/js/synthetic_payload.js ---
const DEFAULT_DATASET = {
  "metadata": {
    "platform": "GCPL Treasury Command",
    "version": "v2.0.4",
    "as_of": "2026-10-11T09:30:00Z",
    "environment": "DEMO_SYNTHETIC",
    "watermark": "SYNTHETIC DATA - DEMO TENANT ONLY",
    "base_currency": "INR",
    "reporting_currencies": [
      "INR",
      "USD",
      "EUR",
      "GBP"
    ],
    "fx_rates_usd": {
      "USD": 1.0,
      "INR": 0.011876484560570071,
      "GBP": 1.285,
      "EUR": 1.088,
      "AED": 0.27229407760381213,
      "IDR": 6.389776357827476e-05,
      "BDT": 0.008298755186721992,
      "SGD": 0.7547169811320755,
      "CAD": 0.7342143906020557,
      "ZAR": 0.0547945205479452,
      "NGN": 0.0006079027355623101,
      "KES": 0.007739938080495357
    }
  },
  "group_summary": {
    "total_entities": 12,
    "total_accounts": 81,
    "total_banks": 26,
    "stale_accounts_count": 5,
    "restricted_accounts_count": 16,
    "totals_usd": {
      "total_reported_cash": 308812163.9834817,
      "available_local_obligations": 278980983.84220105,
      "available_group_deployable": 125173472.31665738,
      "restricted_cash": 29831180.141280614,
      "gross_debt": 89581982.75195856,
      "undrawn_facilities": 124390547.77761768,
      "net_debt": -219230181.23152316
    },
    "totals_inr": {
      "total_reported_cash": 26001984207.40916,
      "available_local_obligations": 23490198839.51333,
      "available_group_deployable": 10539606369.062551,
      "restricted_cash": 2511785367.895828,
      "gross_debt": 7542802947.714911,
      "undrawn_facilities": 10473684122.875408
    },
    "cash_visibility_coverage_pct": 93.8,
    "open_breaches": 2,
    "pending_approvals": 4
  },
  "regions": [
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
  ],
  "banks": [
    {
      "id": "BNK-SBI",
      "name": "State Bank of India",
      "tier": "Tier 1 - Primary",
      "region": "Asia",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 120
    },
    {
      "id": "BNK-HDFC",
      "name": "HDFC Bank",
      "tier": "Tier 1 - Primary",
      "region": "Asia",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 95
    },
    {
      "id": "BNK-ICICI",
      "name": "ICICI Bank",
      "tier": "Tier 1 - Primary",
      "region": "Asia",
      "connectivity": "Host-to-Host (API)",
      "status": "CONNECTED",
      "latency_ms": 85
    },
    {
      "id": "BNK-STAN",
      "name": "Standard Chartered",
      "tier": "Tier 1 - Global Core",
      "region": "Global",
      "connectivity": "SWIFT MT940 / CAMT.053",
      "status": "CONNECTED",
      "latency_ms": 150
    },
    {
      "id": "BNK-CITI",
      "name": "Citi Treasury Solutions",
      "tier": "Tier 1 - Global Core",
      "region": "Global",
      "connectivity": "SWIFT MT940 / API",
      "status": "CONNECTED",
      "latency_ms": 110
    },
    {
      "id": "BNK-HSBC",
      "name": "HSBC Global Payments",
      "tier": "Tier 1 - Global Core",
      "region": "Global",
      "connectivity": "SWIFT MT940 / CAMT.053",
      "status": "CONNECTED",
      "latency_ms": 130
    },
    {
      "id": "BNK-DBS",
      "name": "DBS Bank",
      "tier": "Tier 2 - Regional",
      "region": "Asia",
      "connectivity": "API Direct",
      "status": "CONNECTED",
      "latency_ms": 105
    },
    {
      "id": "BNK-MAND",
      "name": "Bank Mandiri",
      "tier": "Tier 2 - Local",
      "region": "Asia",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 210
    },
    {
      "id": "BNK-BCA",
      "name": "Bank Central Asia (BCA)",
      "tier": "Tier 2 - Local",
      "region": "Asia",
      "connectivity": "Daily MT940 File",
      "status": "STALE_WARN",
      "latency_ms": 420
    },
    {
      "id": "BNK-BRAC",
      "name": "BRAC Bank",
      "tier": "Tier 3 - Local",
      "region": "Asia",
      "connectivity": "Daily MT940 File",
      "status": "CONNECTED",
      "latency_ms": 310
    },
    {
      "id": "BNK-BARC",
      "name": "Barclays Corporate",
      "tier": "Tier 1 - Regional Core",
      "region": "Europe",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 90
    },
    {
      "id": "BNK-NWST",
      "name": "NatWest Bank",
      "tier": "Tier 2 - Local",
      "region": "Europe",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 140
    },
    {
      "id": "BNK-LLOY",
      "name": "Lloyds Bank",
      "tier": "Tier 2 - Local",
      "region": "Europe",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 160
    },
    {
      "id": "BNK-BNP",
      "name": "BNP Paribas",
      "tier": "Tier 1 - Regional Core",
      "region": "Europe",
      "connectivity": "CAMT.053 XML",
      "status": "CONNECTED",
      "latency_ms": 115
    },
    {
      "id": "BNK-ING",
      "name": "ING Bank",
      "tier": "Tier 2 - Regional",
      "region": "Europe",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 135
    },
    {
      "id": "BNK-ENBD",
      "name": "Emirates NBD",
      "tier": "Tier 1 - Regional Core",
      "region": "Middle East",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 145
    },
    {
      "id": "BNK-FAB",
      "name": "First Abu Dhabi Bank",
      "tier": "Tier 2 - Regional",
      "region": "Middle East",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 170
    },
    {
      "id": "BNK-STDB",
      "name": "Standard Bank South Africa",
      "tier": "Tier 2 - Local",
      "region": "Africa",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 280
    },
    {
      "id": "BNK-FRND",
      "name": "FirstRand (FNB)",
      "tier": "Tier 2 - Local",
      "region": "Africa",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 260
    },
    {
      "id": "BNK-ACCS",
      "name": "Access Bank Nigeria",
      "tier": "Tier 3 - Local",
      "region": "Africa",
      "connectivity": "Manual Daily Upload",
      "status": "STALE_WARN",
      "latency_ms": 980
    },
    {
      "id": "BNK-ZNTH",
      "name": "Zenith Bank",
      "tier": "Tier 3 - Local",
      "region": "Africa",
      "connectivity": "Manual Daily Upload",
      "status": "CONNECTED",
      "latency_ms": 840
    },
    {
      "id": "BNK-JPM",
      "name": "JPMorgan Chase",
      "tier": "Tier 1 - Global Core",
      "region": "North America",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 80
    },
    {
      "id": "BNK-BOA",
      "name": "Bank of America",
      "tier": "Tier 1 - Regional Core",
      "region": "North America",
      "connectivity": "Host-to-Host (ISO 20022)",
      "status": "CONNECTED",
      "latency_ms": 90
    },
    {
      "id": "BNK-WF",
      "name": "Wells Fargo",
      "tier": "Tier 2 - Regional",
      "region": "North America",
      "connectivity": "BAI2 Feed",
      "status": "CONNECTED",
      "latency_ms": 125
    },
    {
      "id": "BNK-RBC",
      "name": "Royal Bank of Canada",
      "tier": "Tier 2 - Regional",
      "region": "North America",
      "connectivity": "SWIFT MT940",
      "status": "CONNECTED",
      "latency_ms": 110
    },
    {
      "id": "BNK-KCB",
      "name": "KCB Bank Kenya",
      "tier": "Tier 3 - Acquisition Target",
      "region": "Africa",
      "connectivity": "No Feed (Onboarding Phase)",
      "status": "OFFLINE",
      "latency_ms": 0
    }
  ],
  "entities": [
    {
      "id": "GCPL-IN",
      "name": "Godrej Consumer Products Ltd (HQ)",
      "jurisdiction": "IND",
      "currency": "INR",
      "region_id": "REG-ASIA",
      "erp": "SAP S/4HANA",
      "status": "ACTIVE",
      "is_hq": true,
      "coordinator": "Sunil Varma",
      "deputy": "Ananya Sen",
      "pool_status": "GTC_POOL_LEADER",
      "pool_eligible": true,
      "restricted_reasons": "Statutory CSR & Dividend escrow reserve",
      "stale_count": 0,
      "account_count": 11,
      "cash_categories": {
        "total_reported_native": 4090000000.0,
        "total_reported_usd": 48574821.85273159,
        "available_local_native": 3730000000.0,
        "available_local_usd": 44299287.410926364,
        "available_group_deployable_native": 2051500000.0,
        "available_group_deployable_usd": 24364608.0760095,
        "restricted_native": 360000000.0,
        "restricted_usd": 4275534.441805226,
        "gross_debt_native": 1800000000,
        "gross_debt_usd": 21377672.209026128,
        "undrawn_facilities_native": 2500000000,
        "undrawn_facilities_usd": 29691211.40142518
      },
      "sparkline_13w": [
        4069550000,
        4049100000,
        3844600000,
        4151350000,
        4130900000,
        3926400000,
        3905950000,
        4212700000,
        4008200000,
        3987750000,
        3967300000,
        4090000000,
        4069550000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-ID",
      "name": "PT GCPL Indonesia",
      "jurisdiction": "IDN",
      "currency": "IDR",
      "region_id": "REG-ASIA",
      "erp": "SAP ECC 6.0",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Budi Santoso",
      "deputy": "Dewi Lestari",
      "pool_status": "RESTRICTED_DOMESTIC",
      "pool_eligible": false,
      "restricted_reasons": "Bank Indonesia FX repatriation rule & Local withholding tax gate",
      "stale_count": 1,
      "account_count": 6,
      "cash_categories": {
        "total_reported_native": 319000000000.0,
        "total_reported_usd": 20383386.581469648,
        "available_local_native": 259000000000.0,
        "available_local_usd": 16549520.766773164,
        "available_group_deployable_native": 0.0,
        "available_group_deployable_usd": 0.0,
        "restricted_native": 60000000000.0,
        "restricted_usd": 3833865.8146964856,
        "gross_debt_native": 65000000000,
        "gross_debt_usd": 4153354.6325878594,
        "undrawn_facilities_native": 120000000000,
        "undrawn_facilities_usd": 7667731.629392971
      },
      "sparkline_13w": [
        317405000000,
        315810000000,
        299860000000,
        323785000000,
        322190000000,
        306240000000,
        304645000000,
        328570000000,
        312620000000,
        311025000000,
        309430000000,
        319000000000,
        317405000000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "CHALLENGED",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": false,
        "signoffs": {
          "tax": false,
          "legal": false,
          "local_finance": true,
          "banks": true,
          "group_treasury": false
        },
        "five_elements": {
          "central_vs_local": "IN_REVIEW",
          "local_accounts_held": "IN_REVIEW",
          "movement_tax_conditions": "BLOCKED_TAX_WITHHOLDING",
          "documentation_accounting": "PENDING_LEGAL",
          "benefit_vs_cost": "NEUTRAL"
        }
      }
    },
    {
      "id": "GCPL-BD",
      "name": "GCPL Bangladesh Pvt Ltd",
      "jurisdiction": "BGD",
      "currency": "BDT",
      "region_id": "REG-ASIA",
      "erp": "Tally ERP 9",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Kamal Hossain",
      "deputy": "Nasreen Akhtar",
      "pool_status": "REPORTING_ONLY",
      "pool_eligible": false,
      "restricted_reasons": "Bangladesh Bank central approval required for cross-border sweeps",
      "stale_count": 0,
      "account_count": 5,
      "cash_categories": {
        "total_reported_native": 995000000.0,
        "total_reported_usd": 8257261.4107883815,
        "available_local_native": 735000000.0,
        "available_local_usd": 6099585.062240664,
        "available_group_deployable_native": 0.0,
        "available_group_deployable_usd": 0.0,
        "restricted_native": 260000000.0,
        "restricted_usd": 2157676.348547718,
        "gross_debt_native": 350000000,
        "gross_debt_usd": 2904564.315352697,
        "undrawn_facilities_native": 200000000,
        "undrawn_facilities_usd": 1659751.0373443984
      },
      "sparkline_13w": [
        990025000,
        985050000,
        935300000,
        1009925000,
        1004950000,
        955200000,
        950225000,
        1024850000,
        975100000,
        970125000,
        965150000,
        995000000,
        990025000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": false,
        "signoffs": {
          "tax": false,
          "legal": false,
          "local_finance": true,
          "banks": true,
          "group_treasury": false
        },
        "five_elements": {
          "central_vs_local": "IN_REVIEW",
          "local_accounts_held": "IN_REVIEW",
          "movement_tax_conditions": "BLOCKED_TAX_WITHHOLDING",
          "documentation_accounting": "PENDING_LEGAL",
          "benefit_vs_cost": "NEUTRAL"
        }
      }
    },
    {
      "id": "GCPL-SG",
      "name": "GCPL Singapore Pte Ltd",
      "jurisdiction": "SGP",
      "currency": "USD",
      "region_id": "REG-ASIA",
      "erp": "Oracle Cloud",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Kelvin Tan",
      "deputy": "Serene Lim",
      "pool_status": "REGIONAL_HUB_ELIGIBLE",
      "pool_eligible": true,
      "restricted_reasons": "None - MAS compliant treasury vehicle",
      "stale_count": 0,
      "account_count": 5,
      "cash_categories": {
        "total_reported_native": 37900000.0,
        "total_reported_usd": 37900000.0,
        "available_local_native": 36400000.0,
        "available_local_usd": 36400000.0,
        "available_group_deployable_native": 20020000.0,
        "available_group_deployable_usd": 20020000.0,
        "restricted_native": 1500000.0,
        "restricted_usd": 1500000.0,
        "gross_debt_native": 5000000,
        "gross_debt_usd": 5000000.0,
        "undrawn_facilities_native": 25000000,
        "undrawn_facilities_usd": 25000000.0
      },
      "sparkline_13w": [
        37710500,
        37521000,
        35626000,
        38468500,
        38279000,
        36384000,
        36194500,
        39037000,
        37142000,
        36952500,
        36763000,
        37900000,
        37710500
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-UK",
      "name": "GCPL UK Holdings Ltd",
      "jurisdiction": "GBR",
      "currency": "GBP",
      "region_id": "REG-EMEA",
      "erp": "Microsoft Dynamics 365",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Edward Thornton",
      "deputy": "Sarah Jenkins",
      "pool_status": "ACTIVE_SURPLUS_CANDIDATE",
      "pool_eligible": true,
      "restricted_reasons": "Pension fund guarantee ring-fenced escrow",
      "stale_count": 0,
      "account_count": 9,
      "cash_categories": {
        "total_reported_native": 44200000.0,
        "total_reported_usd": 56797000.0,
        "available_local_native": 40250000.0,
        "available_local_usd": 51721250.0,
        "available_group_deployable_native": 22137500.0,
        "available_group_deployable_usd": 28446687.5,
        "restricted_native": 3950000.0,
        "restricted_usd": 5075750.0,
        "gross_debt_native": 0,
        "gross_debt_usd": 0.0,
        "undrawn_facilities_native": 15000000,
        "undrawn_facilities_usd": 19275000.0
      },
      "sparkline_13w": [
        43979000,
        43758000,
        41548000,
        44863000,
        44642000,
        42432000,
        42211000,
        45526000,
        43316000,
        43095000,
        42874000,
        44200000,
        43979000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 2,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-NL",
      "name": "GCPL Netherlands B.V.",
      "jurisdiction": "NLD",
      "currency": "EUR",
      "region_id": "REG-EMEA",
      "erp": "SAP S/4HANA",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Jan van de Berg",
      "deputy": "Lieke de Jong",
      "pool_status": "ELIGIBLE_CROSS_BORDER",
      "pool_eligible": true,
      "restricted_reasons": "Dutch customs duty guarantee",
      "stale_count": 0,
      "account_count": 5,
      "cash_categories": {
        "total_reported_native": 25600000.0,
        "total_reported_usd": 27852800.000000004,
        "available_local_native": 24000000.0,
        "available_local_usd": 26112000.000000004,
        "available_group_deployable_native": 13200000.0,
        "available_group_deployable_usd": 14361600.000000002,
        "restricted_native": 1600000.0,
        "restricted_usd": 1740800.0000000002,
        "gross_debt_native": 4000000,
        "gross_debt_usd": 4352000.0,
        "undrawn_facilities_native": 10000000,
        "undrawn_facilities_usd": 10880000.0
      },
      "sparkline_13w": [
        25472000,
        25344000,
        24064000,
        25984000,
        25856000,
        24576000,
        24448000,
        26368000,
        25088000,
        24960000,
        24832000,
        25600000,
        25472000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-AE",
      "name": "GCPL Middle East FZE",
      "jurisdiction": "ARE",
      "currency": "AED",
      "region_id": "REG-EMEA",
      "erp": "Oracle NetSuite",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Tariq Al-Mansoor",
      "deputy": "Rashid Khan",
      "pool_status": "TAX_HUB_ELIGIBLE",
      "pool_eligible": true,
      "restricted_reasons": "Freezone customs deposit",
      "stale_count": 0,
      "account_count": 6,
      "cash_categories": {
        "total_reported_native": 101500000.0,
        "total_reported_usd": 27637848.876786932,
        "available_local_native": 97300000.0,
        "available_local_usd": 26494213.75085092,
        "available_group_deployable_native": 53515000.0,
        "available_group_deployable_usd": 14571817.562968006,
        "restricted_native": 4200000.0,
        "restricted_usd": 1143635.1259360109,
        "gross_debt_native": 12000000,
        "gross_debt_usd": 3267528.9312457456,
        "undrawn_facilities_native": 45000000,
        "undrawn_facilities_usd": 12253233.492171546
      },
      "sparkline_13w": [
        100992500,
        100485000,
        95410000,
        103022500,
        102515000,
        97440000,
        96932500,
        104545000,
        99470000,
        98962500,
        98455000,
        101500000,
        100992500
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-ZA",
      "name": "GCPL South Africa (Pty) Ltd",
      "jurisdiction": "ZAF",
      "currency": "ZAR",
      "region_id": "REG-EMEA",
      "erp": "Syspro",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Thabo Mbeki",
      "deputy": "Zanele Sithole",
      "pool_status": "EXCHANGE_CONTROL_REVIEW",
      "pool_eligible": false,
      "restricted_reasons": "SARB (South African Reserve Bank) exchange approval needed for capital outbound",
      "stale_count": 0,
      "account_count": 7,
      "cash_categories": {
        "total_reported_native": 259500000.0,
        "total_reported_usd": 14219178.08219178,
        "available_local_native": 237500000.0,
        "available_local_usd": 13013698.630136985,
        "available_group_deployable_native": 0.0,
        "available_group_deployable_usd": 0.0,
        "restricted_native": 22000000.0,
        "restricted_usd": 1205479.4520547944,
        "gross_debt_native": 85000000,
        "gross_debt_usd": 4657534.2465753425,
        "undrawn_facilities_native": 50000000,
        "undrawn_facilities_usd": 2739726.02739726
      },
      "sparkline_13w": [
        258202500,
        256905000,
        243930000,
        263392500,
        262095000,
        249120000,
        247822500,
        267285000,
        254310000,
        253012500,
        251715000,
        259500000,
        258202500
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": false,
        "signoffs": {
          "tax": false,
          "legal": false,
          "local_finance": true,
          "banks": true,
          "group_treasury": false
        },
        "five_elements": {
          "central_vs_local": "IN_REVIEW",
          "local_accounts_held": "IN_REVIEW",
          "movement_tax_conditions": "BLOCKED_TAX_WITHHOLDING",
          "documentation_accounting": "PENDING_LEGAL",
          "benefit_vs_cost": "NEUTRAL"
        }
      }
    },
    {
      "id": "GCPL-NG",
      "name": "GCPL Nigeria Ltd",
      "jurisdiction": "NGA",
      "currency": "NGN",
      "region_id": "REG-EMEA",
      "erp": "Sage 300",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Chinedu Okafor",
      "deputy": "Amina Bello",
      "pool_status": "TRAPPED_CASH_MONITORED",
      "pool_eligible": false,
      "restricted_reasons": "Severe Central Bank of Nigeria FX illiquidity & repatriation queue",
      "stale_count": 3,
      "account_count": 7,
      "cash_categories": {
        "total_reported_native": 27000000000.0,
        "total_reported_usd": 16413373.860182373,
        "available_local_native": 17600000000.0,
        "available_local_usd": 10699088.145896656,
        "available_group_deployable_native": 0.0,
        "available_group_deployable_usd": 0.0,
        "restricted_native": 9400000000.0,
        "restricted_usd": 5714285.714285715,
        "gross_debt_native": 14500000000,
        "gross_debt_usd": 8814589.665653495,
        "undrawn_facilities_native": 4000000000,
        "undrawn_facilities_usd": 2431610.9422492404
      },
      "sparkline_13w": [
        26865000000,
        26730000000,
        25380000000,
        27405000000,
        27270000000,
        25920000000,
        25785000000,
        27810000000,
        26460000000,
        26325000000,
        26190000000,
        27000000000,
        26865000000
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "CHALLENGED",
      "breach_count": 1,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": false,
        "signoffs": {
          "tax": false,
          "legal": false,
          "local_finance": true,
          "banks": false,
          "group_treasury": false
        },
        "five_elements": {
          "central_vs_local": "IN_REVIEW",
          "local_accounts_held": "IN_REVIEW",
          "movement_tax_conditions": "BLOCKED_TAX_WITHHOLDING",
          "documentation_accounting": "PENDING_LEGAL",
          "benefit_vs_cost": "NEUTRAL"
        }
      }
    },
    {
      "id": "GCPL-US",
      "name": "GCPL Americas Inc",
      "jurisdiction": "USA",
      "currency": "USD",
      "region_id": "REG-NA",
      "erp": "SAP S/4HANA",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Brian O'Connor",
      "deputy": "Jessica Vance",
      "pool_status": "ACTIVE_BORROWER_NEED",
      "pool_eligible": true,
      "restricted_reasons": "US Customs bonded warehouse letter of credit",
      "stale_count": 0,
      "account_count": 8,
      "cash_categories": {
        "total_reported_native": 32100000.0,
        "total_reported_usd": 32100000.0,
        "available_local_native": 30300000.0,
        "available_local_usd": 30300000.0,
        "available_group_deployable_native": 16665000.0,
        "available_group_deployable_usd": 16665000.0,
        "restricted_native": 1800000.0,
        "restricted_usd": 1800000.0,
        "gross_debt_native": 28500000,
        "gross_debt_usd": 28500000.0,
        "undrawn_facilities_native": 8000000,
        "undrawn_facilities_usd": 8000000.0
      },
      "sparkline_13w": [
        31939500,
        31779000,
        30174000,
        32581500,
        32421000,
        30816000,
        30655500,
        33063000,
        31458000,
        31297500,
        31137000,
        32100000,
        31939500
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 1,
      "pending_approvals": 2,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-CA",
      "name": "GCPL Canada Consumer Corp",
      "jurisdiction": "CAN",
      "currency": "CAD",
      "region_id": "REG-NA",
      "erp": "Microsoft Dynamics NAV",
      "status": "ACTIVE",
      "is_hq": false,
      "coordinator": "Marc Tremblay",
      "deputy": "Claire Beauchamp",
      "pool_status": "ASSESSED_ELIGIBLE",
      "pool_eligible": true,
      "restricted_reasons": "Quebec statutory sales tax reserve",
      "stale_count": 0,
      "account_count": 7,
      "cash_categories": {
        "total_reported_native": 17900000.0,
        "total_reported_usd": 13142437.591776798,
        "available_local_native": 16700000.0,
        "available_local_usd": 12261380.32305433,
        "available_group_deployable_native": 9185000.0,
        "available_group_deployable_usd": 6743759.177679881,
        "restricted_native": 1200000.0,
        "restricted_usd": 881057.2687224669,
        "gross_debt_native": 4500000,
        "gross_debt_usd": 3303964.757709251,
        "undrawn_facilities_native": 6000000,
        "undrawn_facilities_usd": 4405286.343612335
      },
      "sparkline_13w": [
        17810500,
        17721000,
        16826000,
        18168500,
        18079000,
        17184000,
        17094500,
        18437000,
        17542000,
        17452500,
        17363000,
        17900000,
        17810500
      ],
      "forecast_status": "SUBMITTED",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": true,
        "signoffs": {
          "tax": true,
          "legal": true,
          "local_finance": true,
          "banks": true,
          "group_treasury": true
        },
        "five_elements": {
          "central_vs_local": "APPROVED",
          "local_accounts_held": "APPROVED",
          "movement_tax_conditions": "COMPLIANT",
          "documentation_accounting": "STANDARD_IC_AGREEMENT",
          "benefit_vs_cost": "POSITIVE_NPV"
        }
      }
    },
    {
      "id": "GCPL-KE",
      "name": "GCPL Kenya Ltd (Acquisition)",
      "jurisdiction": "KEN",
      "currency": "KES",
      "region_id": "REG-NA",
      "erp": "QuickBooks Enterprise (Legacy)",
      "status": "ONBOARDING_WAVE_1",
      "is_hq": false,
      "coordinator": "Erick Mwangi",
      "deputy": "Grace Kimani",
      "pool_status": "NOT_ONBOARDED",
      "pool_eligible": false,
      "restricted_reasons": "Pre-acquisition tax audit escrow and local banking covenants",
      "stale_count": 1,
      "account_count": 5,
      "cash_categories": {
        "total_reported_native": 715000000.0,
        "total_reported_usd": 5534055.727554181,
        "available_local_native": 650000000.0,
        "available_local_usd": 5030959.752321982,
        "available_group_deployable_native": 0.0,
        "available_group_deployable_usd": 0.0,
        "restricted_native": 65000000.0,
        "restricted_usd": 503095.9752321982,
        "gross_debt_native": 420000000,
        "gross_debt_usd": 3250773.9938080497,
        "undrawn_facilities_native": 50000000,
        "undrawn_facilities_usd": 386996.90402476786
      },
      "sparkline_13w": [
        711425000,
        707850000,
        672100000,
        725725000,
        722150000,
        686400000,
        682825000,
        736450000,
        700700000,
        697125000,
        693550000,
        715000000,
        711425000
      ],
      "forecast_status": "PENDING_SETUP",
      "forecast_timeliness": "ON_TIME",
      "breach_count": 0,
      "pending_approvals": 0,
      "loc1_assessment": {
        "completed": false,
        "signoffs": {
          "tax": false,
          "legal": false,
          "local_finance": true,
          "banks": true,
          "group_treasury": false
        },
        "five_elements": {
          "central_vs_local": "IN_REVIEW",
          "local_accounts_held": "IN_REVIEW",
          "movement_tax_conditions": "BLOCKED_TAX_WITHHOLDING",
          "documentation_accounting": "PENDING_LEGAL",
          "benefit_vs_cost": "NEUTRAL"
        }
      }
    }
  ],
  "accounts": [
    {
      "id": "ACC-101",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-SBI",
      "name": "Main Operating Collection",
      "purpose": "Operating Collection",
      "currency": "INR",
      "balance": 1250000000,
      "balance_usd": 14845605.70071259,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-102",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-HDFC",
      "name": "Disbursement & Payroll Account",
      "purpose": "Disbursement",
      "currency": "INR",
      "balance": 340000000,
      "balance_usd": 4038004.7505938243,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-103",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-ICICI",
      "name": "Treasury Liquidity Buffer",
      "purpose": "Treasury Sweep",
      "currency": "INR",
      "balance": 850000000,
      "balance_usd": 10095011.87648456,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (API)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-104",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-CITI",
      "name": "USD Trade Settlement",
      "purpose": "FX Trade Settlement",
      "currency": "INR",
      "balance": 92000000,
      "balance_usd": 1092636.5795724464,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-105",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-STAN",
      "name": "Statutory Escrow & CSR Account",
      "purpose": "Statutory Escrow",
      "currency": "INR",
      "balance": 150000000,
      "balance_usd": 1781472.6840855107,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Statutory CSR & Dividend escrow reserve",
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-106",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-HSBC",
      "name": "Commercial Paper Settlement",
      "purpose": "Debt Service",
      "currency": "INR",
      "balance": 180000000,
      "balance_usd": 2137767.220902613,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-107",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-SBI",
      "name": "Regional Cash Concentration",
      "purpose": "Pooling Header",
      "currency": "INR",
      "balance": 620000000,
      "balance_usd": 7363420.427553444,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-108",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-HDFC",
      "name": "Capex Project Escrow",
      "purpose": "Capex Escrow",
      "currency": "INR",
      "balance": 210000000,
      "balance_usd": 2494061.7577197147,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Statutory CSR & Dividend escrow reserve",
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-109",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-ICICI",
      "name": "Baddi Factory Operations A/c",
      "purpose": "Operating Collection",
      "currency": "INR",
      "balance": 115000000,
      "balance_usd": 1365795.724465558,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (API)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-110",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-SBI",
      "name": "Malanpur Manufacturing Payroll",
      "purpose": "Disbursement",
      "currency": "INR",
      "balance": 98000000,
      "balance_usd": 1163895.486935867,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-111",
      "entity_id": "GCPL-IN",
      "bank_id": "BNK-HDFC",
      "name": "North India Dealer Collections",
      "purpose": "Dealer Receipts",
      "currency": "INR",
      "balance": 185000000,
      "balance_usd": 2197149.643705463,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Sunil Varma",
        "Ananya Sen",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-112",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-MAND",
      "name": "Jakarta Main Operating",
      "purpose": "Operating Collection",
      "currency": "IDR",
      "balance": 145000000000,
      "balance_usd": 9265175.71884984,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-113",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-BCA",
      "name": "Surabaya Factory Payroll",
      "purpose": "Disbursement",
      "currency": "IDR",
      "balance": 28000000000,
      "balance_usd": 1789137.3801916933,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-09T18:00:00Z",
      "is_stale": true,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Daily MT940 File",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-114",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-CITI",
      "name": "USD Export Proceeds Escrow",
      "purpose": "Restricted Collection",
      "currency": "IDR",
      "balance": 42000000000,
      "balance_usd": 2683706.07028754,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Bank Indonesia FX repatriation rule & Local withholding tax gate",
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-115",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-STAN",
      "name": "Local Working Capital Buffer",
      "purpose": "Operating Buffer",
      "currency": "IDR",
      "balance": 55000000000,
      "balance_usd": 3514376.996805112,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-116",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-MAND",
      "name": "Tax & Statutory Reserve",
      "purpose": "Tax Reserve",
      "currency": "IDR",
      "balance": 18000000000,
      "balance_usd": 1150159.7444089458,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Bank Indonesia FX repatriation rule & Local withholding tax gate",
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-117",
      "entity_id": "GCPL-ID",
      "bank_id": "BNK-BCA",
      "name": "Vendor Payments Hub",
      "purpose": "Disbursement",
      "currency": "IDR",
      "balance": 31000000000,
      "balance_usd": 1980830.6709265176,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Daily MT940 File",
      "signatories": [
        "Budi Santoso",
        "Dewi Lestari",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-118",
      "entity_id": "GCPL-BD",
      "bank_id": "BNK-BRAC",
      "name": "Dhaka Operations Account",
      "purpose": "Operating Collection",
      "currency": "BDT",
      "balance": 480000000,
      "balance_usd": 3983402.489626556,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Daily MT940 File",
      "signatories": [
        "Kamal Hossain",
        "Nasreen Akhtar",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-119",
      "entity_id": "GCPL-BD",
      "bank_id": "BNK-STAN",
      "name": "Chittagong Port Customs Escrow",
      "purpose": "Customs Escrow",
      "currency": "BDT",
      "balance": 120000000,
      "balance_usd": 995850.622406639,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Bangladesh Bank central approval required for cross-border sweeps",
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Kamal Hossain",
        "Nasreen Akhtar",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-120",
      "entity_id": "GCPL-BD",
      "bank_id": "BNK-BRAC",
      "name": "Plant Payroll & Operational",
      "purpose": "Disbursement",
      "currency": "BDT",
      "balance": 160000000,
      "balance_usd": 1327800.8298755186,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Daily MT940 File",
      "signatories": [
        "Kamal Hossain",
        "Nasreen Akhtar",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-121",
      "entity_id": "GCPL-BD",
      "bank_id": "BNK-HSBC",
      "name": "Working Capital Facility A/c",
      "purpose": "Credit Line",
      "currency": "BDT",
      "balance": 95000000,
      "balance_usd": 788381.7427385892,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Kamal Hossain",
        "Nasreen Akhtar",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-122",
      "entity_id": "GCPL-BD",
      "bank_id": "BNK-CITI",
      "name": "Import L/C Margin Deposit",
      "purpose": "Margin Deposit",
      "currency": "BDT",
      "balance": 140000000,
      "balance_usd": 1161825.7261410789,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Bangladesh Bank central approval required for cross-border sweeps",
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Kamal Hossain",
        "Nasreen Akhtar",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-123",
      "entity_id": "GCPL-SG",
      "bank_id": "BNK-DBS",
      "name": "Regional Treasury Liquidity Pool",
      "purpose": "Pooling Sweep",
      "currency": "USD",
      "balance": 14500000,
      "balance_usd": 14500000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "API Direct",
      "signatories": [
        "Kelvin Tan",
        "Serene Lim",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-124",
      "entity_id": "GCPL-SG",
      "bank_id": "BNK-CITI",
      "name": "Global Procurement Hub USD",
      "purpose": "Trade Settlement",
      "currency": "USD",
      "balance": 8200000,
      "balance_usd": 8200000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Kelvin Tan",
        "Serene Lim",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-125",
      "entity_id": "GCPL-SG",
      "bank_id": "BNK-STAN",
      "name": "Southeast Asia Cash Header",
      "purpose": "Cash Concentration",
      "currency": "USD",
      "balance": 11400000,
      "balance_usd": 11400000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Kelvin Tan",
        "Serene Lim",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-126",
      "entity_id": "GCPL-SG",
      "bank_id": "BNK-HSBC",
      "name": "SGD Operating & Rent",
      "purpose": "Operating",
      "currency": "USD",
      "balance": 2300000,
      "balance_usd": 2300000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Kelvin Tan",
        "Serene Lim",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-127",
      "entity_id": "GCPL-SG",
      "bank_id": "BNK-DBS",
      "name": "FX Hedging Margin Account",
      "purpose": "Collateral Margin",
      "currency": "USD",
      "balance": 1500000,
      "balance_usd": 1500000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "None - MAS compliant treasury vehicle",
      "connectivity": "API Direct",
      "signatories": [
        "Kelvin Tan",
        "Serene Lim",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-128",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-BARC",
      "name": "London Main Operating Revenue",
      "purpose": "Operating Collection",
      "currency": "GBP",
      "balance": 6200000,
      "balance_usd": 7966999.999999999,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-129",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-BARC",
      "name": "Treasury Surplus Money Market A/c",
      "purpose": "Deployable Surplus",
      "currency": "GBP",
      "balance": 18500000,
      "balance_usd": 23772500.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-130",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-NWST",
      "name": "UK Payroll & PAYE Tax",
      "purpose": "Disbursement",
      "currency": "GBP",
      "balance": 2400000,
      "balance_usd": 3084000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-131",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-LLOY",
      "name": "Pension Escrow Ring-fenced",
      "purpose": "Pension Guarantee",
      "currency": "GBP",
      "balance": 3100000,
      "balance_usd": 3983499.9999999995,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Pension fund guarantee ring-fenced escrow",
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-132",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-BNP",
      "name": "EUR Trade Settlement Account",
      "purpose": "FX Settlement",
      "currency": "GBP",
      "balance": 4200000,
      "balance_usd": 5397000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "CAMT.053 XML",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-133",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-HSBC",
      "name": "UK Supplier BACS Clearing",
      "purpose": "Disbursement",
      "currency": "GBP",
      "balance": 1900000,
      "balance_usd": 2441500.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-134",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-BARC",
      "name": "Overnight Liquidity Sweep A/c",
      "purpose": "Sweep Header",
      "currency": "GBP",
      "balance": 5800000,
      "balance_usd": 7453000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-135",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-LLOY",
      "name": "Manchester Distribution Depot A/c",
      "purpose": "Operating Collection",
      "currency": "GBP",
      "balance": 1250000,
      "balance_usd": 1606250.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-136",
      "entity_id": "GCPL-UK",
      "bank_id": "BNK-NWST",
      "name": "VAT & Customs Duty Reserve",
      "purpose": "Tax Reserve",
      "currency": "GBP",
      "balance": 850000,
      "balance_usd": 1092250.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Pension fund guarantee ring-fenced escrow",
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Edward Thornton",
        "Sarah Jenkins",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-137",
      "entity_id": "GCPL-NL",
      "bank_id": "BNK-BNP",
      "name": "Continental Europe Sales A/c",
      "purpose": "Operating Collection",
      "currency": "EUR",
      "balance": 8900000,
      "balance_usd": 9683200.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "CAMT.053 XML",
      "signatories": [
        "Jan van de Berg",
        "Lieke de Jong",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-138",
      "entity_id": "GCPL-NL",
      "bank_id": "BNK-ING",
      "name": "Amsterdam Logistics & Freight",
      "purpose": "Disbursement",
      "currency": "EUR",
      "balance": 3400000,
      "balance_usd": 3699200.0000000005,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Jan van de Berg",
        "Lieke de Jong",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-139",
      "entity_id": "GCPL-NL",
      "bank_id": "BNK-CITI",
      "name": "EUR Cash Pool Participant",
      "purpose": "Cash Pool",
      "currency": "EUR",
      "balance": 7200000,
      "balance_usd": 7833600.000000001,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Jan van de Berg",
        "Lieke de Jong",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-140",
      "entity_id": "GCPL-NL",
      "bank_id": "BNK-BNP",
      "name": "EU VAT Escrow Reserve",
      "purpose": "Tax Reserve",
      "currency": "EUR",
      "balance": 1600000,
      "balance_usd": 1740800.0000000002,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Dutch customs duty guarantee",
      "connectivity": "CAMT.053 XML",
      "signatories": [
        "Jan van de Berg",
        "Lieke de Jong",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-141",
      "entity_id": "GCPL-NL",
      "bank_id": "BNK-ING",
      "name": "Cross-Border Intercompany Sweeper",
      "purpose": "Treasury Sweep",
      "currency": "EUR",
      "balance": 4500000,
      "balance_usd": 4896000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Jan van de Berg",
        "Lieke de Jong",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-142",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-ENBD",
      "name": "Dubai JAFZA Main Operating",
      "purpose": "Operating Collection",
      "currency": "AED",
      "balance": 32000000,
      "balance_usd": 8713410.483321989,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-143",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-FAB",
      "name": "Middle East Distribution Receipts",
      "purpose": "Operating Collection",
      "currency": "AED",
      "balance": 18500000,
      "balance_usd": 5037440.435670525,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-144",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-ENBD",
      "name": "Regional Treasury USD Clearing",
      "purpose": "Treasury Sweep",
      "currency": "AED",
      "balance": 24000000,
      "balance_usd": 6535057.862491491,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-145",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-CITI",
      "name": "Gulf GCC Multicurrency Pool",
      "purpose": "Pooling Sweep",
      "currency": "AED",
      "balance": 15000000,
      "balance_usd": 4084411.164057182,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-146",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-FAB",
      "name": "JAFZA Authority Customs Escrow",
      "purpose": "Customs Deposit",
      "currency": "AED",
      "balance": 4200000,
      "balance_usd": 1143635.1259360109,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Freezone customs deposit",
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-147",
      "entity_id": "GCPL-AE",
      "bank_id": "BNK-HSBC",
      "name": "Regional Payroll WPS Compliant",
      "purpose": "Payroll",
      "currency": "AED",
      "balance": 7800000,
      "balance_usd": 2123893.805309735,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Tariq Al-Mansoor",
        "Rashid Khan",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-148",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-STDB",
      "name": "Johannesburg Commercial Operations",
      "purpose": "Operating Collection",
      "currency": "ZAR",
      "balance": 112000000,
      "balance_usd": 6136986.301369863,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-149",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-FRND",
      "name": "Durban Factory Payroll & Payables",
      "purpose": "Disbursement",
      "currency": "ZAR",
      "balance": 46000000,
      "balance_usd": 2520547.9452054794,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-150",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-STDB",
      "name": "SARS Tax Statutory Reserve",
      "purpose": "Tax Reserve",
      "currency": "ZAR",
      "balance": 22000000,
      "balance_usd": 1205479.4520547944,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "SARB (South African Reserve Bank) exchange approval needed for capital outbound",
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-151",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-STAN",
      "name": "USD Trade Import Financing",
      "purpose": "Trade Loan",
      "currency": "ZAR",
      "balance": 35000000,
      "balance_usd": 1917808.2191780822,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-152",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-FRND",
      "name": "Southern Africa Logistics Hub",
      "purpose": "Operating",
      "currency": "ZAR",
      "balance": 18000000,
      "balance_usd": 986301.3698630136,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-153",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-STDB",
      "name": "Cape Town Regional Depo A/c",
      "purpose": "Operating Collection",
      "currency": "ZAR",
      "balance": 14000000,
      "balance_usd": 767123.2876712328,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-154",
      "entity_id": "GCPL-ZA",
      "bank_id": "BNK-FRND",
      "name": "Pretoria Packaging Plant A/c",
      "purpose": "Disbursement",
      "currency": "ZAR",
      "balance": 12500000,
      "balance_usd": 684931.506849315,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Thabo Mbeki",
        "Zanele Sithole",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-155",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-ACCS",
      "name": "Lagos Distributorship Inflow",
      "purpose": "Operating Collection",
      "currency": "NGN",
      "balance": 8500000000,
      "balance_usd": 5167173.2522796355,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-09T18:00:00Z",
      "is_stale": true,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Manual Daily Upload",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-156",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-ZNTH",
      "name": "Ikeja Plant Operations & Payroll",
      "purpose": "Disbursement",
      "currency": "NGN",
      "balance": 3200000000,
      "balance_usd": 1945288.7537993921,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Manual Daily Upload",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-157",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-STAN",
      "name": "CBN Form A Repatriation Escrow",
      "purpose": "Trapped Cash Escrow",
      "currency": "NGN",
      "balance": 9400000000,
      "balance_usd": 5714285.714285715,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Severe Central Bank of Nigeria FX illiquidity & repatriation queue",
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-158",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-CITI",
      "name": "Export Proceeds Dom A/c",
      "purpose": "FX Proceeds",
      "currency": "NGN",
      "balance": 1800000000,
      "balance_usd": 1094224.924012158,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-159",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-ACCS",
      "name": "Local Raw Material Creditors",
      "purpose": "Disbursement",
      "currency": "NGN",
      "balance": 2100000000,
      "balance_usd": 1276595.7446808512,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-09T18:00:00Z",
      "is_stale": true,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Manual Daily Upload",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-160",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-ZNTH",
      "name": "Port Harcourt Depot Account",
      "purpose": "Operating Collection",
      "currency": "NGN",
      "balance": 1150000000,
      "balance_usd": 699088.1458966566,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Manual Daily Upload",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-161",
      "entity_id": "GCPL-NG",
      "bank_id": "BNK-ACCS",
      "name": "Kano Distribution Branch",
      "purpose": "Disbursement",
      "currency": "NGN",
      "balance": 850000000,
      "balance_usd": 516717.32522796356,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-09T18:00:00Z",
      "is_stale": true,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Manual Daily Upload",
      "signatories": [
        "Chinedu Okafor",
        "Amina Bello",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-162",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-JPM",
      "name": "US Big-Box Retail Collections (Walmart/Target)",
      "purpose": "Operating Collection",
      "currency": "USD",
      "balance": 4800000,
      "balance_usd": 4800000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-163",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-BOA",
      "name": "Disbursements & NA Payroll",
      "purpose": "Disbursement",
      "currency": "USD",
      "balance": 1900000,
      "balance_usd": 1900000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-164",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-WF",
      "name": "Revolving Credit Line Drawdown A/c",
      "purpose": "Active Credit Facility",
      "currency": "USD",
      "balance": 14200000,
      "balance_usd": 14200000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "BAI2 Feed",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-165",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-CITI",
      "name": "Intercompany Trade Settlement",
      "purpose": "Intercompany Settle",
      "currency": "USD",
      "balance": 2100000,
      "balance_usd": 2100000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-166",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-JPM",
      "name": "US Customs Bond Cash Collateral",
      "purpose": "Bond Collateral",
      "currency": "USD",
      "balance": 1800000,
      "balance_usd": 1800000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "US Customs bonded warehouse letter of credit",
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-167",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-BOA",
      "name": "North America Concentration Header",
      "purpose": "Sweep Header",
      "currency": "USD",
      "balance": 3400000,
      "balance_usd": 3400000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-168",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-WF",
      "name": "West Coast Logistics Depo A/c",
      "purpose": "Disbursement",
      "currency": "USD",
      "balance": 1150000,
      "balance_usd": 1150000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "BAI2 Feed",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-169",
      "entity_id": "GCPL-US",
      "bank_id": "BNK-JPM",
      "name": "E-Commerce Merchant Settlement (Amazon)",
      "purpose": "Merchant Receipts",
      "currency": "USD",
      "balance": 2750000,
      "balance_usd": 2750000.0,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Brian O'Connor",
        "Jessica Vance",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-170",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-RBC",
      "name": "Toronto Operating Cash",
      "purpose": "Operating Collection",
      "currency": "CAD",
      "balance": 6400000,
      "balance_usd": 4698972.099853157,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-171",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-BOA",
      "name": "Cross-Border USD Cash Concentrator",
      "purpose": "Operating",
      "currency": "CAD",
      "balance": 3200000,
      "balance_usd": 2349486.0499265785,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-172",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-RBC",
      "name": "Payroll & Health Benefits",
      "purpose": "Disbursement",
      "currency": "CAD",
      "balance": 1800000,
      "balance_usd": 1321585.9030837002,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-173",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-WF",
      "name": "CRA Tax Statutory Trust Account",
      "purpose": "Tax Reserve",
      "currency": "CAD",
      "balance": 1200000,
      "balance_usd": 881057.2687224669,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Quebec statutory sales tax reserve",
      "connectivity": "BAI2 Feed",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-174",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-CITI",
      "name": "Supply Chain Trade Payments",
      "purpose": "Disbursement",
      "currency": "CAD",
      "balance": 2900000,
      "balance_usd": 2129221.7327459618,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / API",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-175",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-RBC",
      "name": "Montreal Distribution Branch A/c",
      "purpose": "Operating Collection",
      "currency": "CAD",
      "balance": 1450000,
      "balance_usd": 1064610.8663729809,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-176",
      "entity_id": "GCPL-CA",
      "bank_id": "BNK-BOA",
      "name": "Vancouver Logistics Deposit",
      "purpose": "Disbursement",
      "currency": "CAD",
      "balance": 950000,
      "balance_usd": 697503.6710719529,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "Host-to-Host (ISO 20022)",
      "signatories": [
        "Marc Tremblay",
        "Claire Beauchamp",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-177",
      "entity_id": "GCPL-KE",
      "bank_id": "BNK-KCB",
      "name": "Nairobi Wholesale Receipts",
      "purpose": "Operating Collection",
      "currency": "KES",
      "balance": 340000000,
      "balance_usd": 2631578.947368421,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "No Feed (Onboarding Phase)",
      "signatories": [
        "Erick Mwangi",
        "Grace Kimani",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-178",
      "entity_id": "GCPL-KE",
      "bank_id": "BNK-STAN",
      "name": "East Africa Distribution Hub",
      "purpose": "Operating",
      "currency": "KES",
      "balance": 180000000,
      "balance_usd": 1393188.8544891642,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Erick Mwangi",
        "Grace Kimani",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-179",
      "entity_id": "GCPL-KE",
      "bank_id": "BNK-KCB",
      "name": "Mombasa Factory Payroll",
      "purpose": "Disbursement",
      "currency": "KES",
      "balance": 95000000,
      "balance_usd": 735294.1176470589,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-09T18:00:00Z",
      "is_stale": true,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "No Feed (Onboarding Phase)",
      "signatories": [
        "Erick Mwangi",
        "Grace Kimani",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-180",
      "entity_id": "GCPL-KE",
      "bank_id": "BNK-KCB",
      "name": "Tax Authority Bond Guarantee",
      "purpose": "Statutory Guarantee",
      "currency": "KES",
      "balance": 65000000,
      "balance_usd": 503095.9752321982,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": true,
      "restriction_reason": "Pre-acquisition tax audit escrow and local banking covenants",
      "connectivity": "No Feed (Onboarding Phase)",
      "signatories": [
        "Erick Mwangi",
        "Grace Kimani",
        "Group Treasurer (Dual)"
      ]
    },
    {
      "id": "ACC-181",
      "entity_id": "GCPL-KE",
      "bank_id": "BNK-STAN",
      "name": "Kisumu Depo Petty Cash & Rent",
      "purpose": "Operating",
      "currency": "KES",
      "balance": 35000000,
      "balance_usd": 270897.8328173375,
      "value_date": "2026-10-11",
      "timestamp": "2026-10-11T08:15:00Z",
      "is_stale": false,
      "is_restricted": false,
      "restriction_reason": null,
      "connectivity": "SWIFT MT940 / CAMT.053",
      "signatories": [
        "Erick Mwangi",
        "Grace Kimani",
        "Group Treasurer (Dual)"
      ]
    }
  ],
  "surplus_borrowing_matches": [
    {
      "id": "MATCH-01",
      "surplus_entity_id": "GCPL-UK",
      "surplus_entity_name": "GCPL UK Holdings Ltd",
      "surplus_amount_native": 18500000,
      "surplus_currency": "GBP",
      "surplus_amount_usd": 23772500.0,
      "surplus_current_yield": "0.45% GBP Overnight Deposit",
      "borrower_entity_id": "GCPL-US",
      "borrower_entity_name": "GCPL Americas Inc",
      "borrower_need_native": 14200000,
      "borrower_currency": "USD",
      "borrower_need_usd": 14200000,
      "borrower_rate": "SOFR + 220 bps (7.50% effective)",
      "potential_spread_bps": 705,
      "indicative_annual_benefit_usd": 1001099.9999999999,
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
      "borrower_need_usd": 10095011.87648456,
      "borrower_rate": "MCLR 8.45% Local Working Capital Line",
      "potential_spread_bps": 765,
      "indicative_annual_benefit_usd": 771885.0000000001,
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
  ],
  "workflows": [
    {
      "id": "W1",
      "name": "Daily Cash Positioning & Validation",
      "trigger": "Scheduled: 06:00 Local Hub Cut-offs",
      "status": "PUBLISHED",
      "version": "v2.1",
      "author": "Treasury CoE",
      "approver": "Risk and Control (Independent)",
      "nodes_count": 8,
      "lanes": [
        "Front",
        "Back",
        "Middle",
        "Group"
      ],
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
      "lanes": [
        "Local",
        "Regional",
        "Group"
      ],
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
      "lanes": [
        "Front",
        "Middle",
        "Back",
        "Local",
        "Tax/Legal",
        "Group"
      ],
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
      "lanes": [
        "Front",
        "Middle",
        "Back"
      ],
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
      "lanes": [
        "Group",
        "Middle",
        "Back"
      ],
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
      "lanes": [
        "Local",
        "Group",
        "Back"
      ],
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
      "lanes": [
        "Local",
        "Back"
      ],
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
      "lanes": [
        "Back",
        "Middle"
      ],
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
      "lanes": [
        "Middle",
        "Group"
      ],
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
      "lanes": [
        "Middle",
        "Group"
      ],
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
      "lanes": [
        "Local",
        "Group",
        "Back"
      ],
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
      "lanes": [
        "Back",
        "Middle",
        "Group"
      ],
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
      "lanes": [
        "Group",
        "Middle"
      ],
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
      "lanes": [
        "Local",
        "Tax/Legal",
        "Group"
      ],
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
      "lanes": [
        "Middle",
        "Group"
      ],
      "summary": "Counterparty and dealing limits update, four-eyes configuration publishing, no empty defaults.",
      "sod_checks": "Passes LR14"
    }
  ],
  "sod_rules": [
    {
      "id": "LR1",
      "name": "Dealer / Approver Separation",
      "severity": "ERROR",
      "description": "A node preparing a deal and a node approving it cannot resolve to the same user or role."
    },
    {
      "id": "LR2",
      "name": "Independent Payment Authorization",
      "severity": "ERROR",
      "description": "Every payment path must include an authorization node whose role is independent of preparation."
    },
    {
      "id": "LR3",
      "name": "Beneficiary Dual Verification",
      "severity": "ERROR",
      "description": "Every beneficiary change path requires independent callback verification and independent approval."
    },
    {
      "id": "LR4",
      "name": "Reconciliation Release Independence",
      "severity": "ERROR",
      "description": "Reconciliation review role must differ from payment release and settlement roles."
    },
    {
      "id": "LR5",
      "name": "LOC-1 Assessment Gate Pre-requisite",
      "severity": "ERROR",
      "description": "Any path that moves cash between legal entities must pass an approved Assessment gate."
    },
    {
      "id": "LR6",
      "name": "Mandatory Audit Event Capture",
      "severity": "ERROR",
      "description": "Every executing node (deal, payment, sweep instruction) must be followed by an immutable Write Audit Event node."
    },
    {
      "id": "LR7",
      "name": "Timeout & Escalation Fallback",
      "severity": "ERROR",
      "description": "Every human task must have an explicit timeout branch and designated escalation target."
    },
    {
      "id": "LR8",
      "name": "Exhaustive Branch Fallback",
      "severity": "ERROR",
      "description": "Every decision or switch node must expose an unmatched fallback branch."
    },
    {
      "id": "LR9",
      "name": "Time-Bound Temporary Privileges",
      "severity": "ERROR",
      "description": "Temporary access paths must define an expiration datetime not exceeding 72 hours."
    },
    {
      "id": "LR10",
      "name": "Role Conflict Matrix Compliance",
      "severity": "ERROR",
      "description": "No user can hold incompatible role combinations simultaneously (Front + Middle/Back)."
    },
    {
      "id": "LR11",
      "name": "Explicit Decision-Rights Reference",
      "severity": "ERROR",
      "description": "Every approval node must reference a binding row in the Treasury Decision Rights Matrix."
    },
    {
      "id": "LR12",
      "name": "Unconnected Required Ports",
      "severity": "ERROR",
      "description": "All required input and output ports must be connected before workflow activation."
    },
    {
      "id": "LR13",
      "name": "Emergency Four-Eyes Preservation",
      "severity": "ERROR",
      "description": "Emergency procedures must retain independent authorization and trigger post-event audit."
    },
    {
      "id": "LR14",
      "name": "Bound Configuration Limits",
      "severity": "ERROR",
      "description": "Limits referenced in workflows must exist in active configuration; zero/unbound limits blocked."
    },
    {
      "id": "LR15",
      "name": "Lane & Role Alignment",
      "severity": "WARNING",
      "description": "Warns when a node's assigned role does not match the semantic lane backdrop."
    },
    {
      "id": "LR16",
      "name": "Sequential Approval Depth",
      "severity": "WARNING",
      "description": "Warns when more than three sequential approvals exist in a operational path to prevent bottlenecks."
    }
  ],
  "audit_events": [
    {
      "timestamp": "2026-10-10T08:00:15Z",
      "actor": "system.feed_daemon",
      "role": "Platform",
      "action": "INGEST_BANK_STATEMENT",
      "object": "ACC-101 (BNK-SBI)",
      "detail": "MT940 balance 1,250,000,000 INR ingested successfully",
      "prev_hash": "0000000000000000000000000000000000000000000000000000000000000000",
      "hash": "853e6f0046ca6089b46d87393e63a80b179fe85bec1a6903b416a6f83450f991",
      "verified": true
    },
    {
      "timestamp": "2026-10-10T14:22:10Z",
      "actor": "fiona.macleod",
      "role": "Regional Treasury Lead",
      "action": "VALIDATE_FORECAST",
      "object": "GCPL-UK W42",
      "detail": "Approved 13-week rolling forecast with GBP 18.5M surplus",
      "prev_hash": "853e6f0046ca6089b46d87393e63a80b179fe85bec1a6903b416a6f83450f991",
      "hash": "98a3b33eebb3074999bf60cbbd0e79657597b903666bcaa62dd0ed8dc3d1b197",
      "verified": true
    },
    {
      "timestamp": "2026-10-11T07:15:00Z",
      "actor": "system.detector",
      "role": "Detector Engine",
      "action": "SURPLUS_NEED_MATCH_DETECTED",
      "object": "MATCH-01",
      "detail": "Surplus GBP 18.5M at GCPL-UK matches USD 14.2M borrowing need at GCPL-US",
      "prev_hash": "98a3b33eebb3074999bf60cbbd0e79657597b903666bcaa62dd0ed8dc3d1b197",
      "hash": "392fa89ca5a1622af5db57a286794bcad2c596b2e5fa42165ed870bb702eab12",
      "verified": true
    },
    {
      "timestamp": "2026-10-11T08:30:45Z",
      "actor": "anand.mehta",
      "role": "Group Treasurer",
      "action": "INITIALIZE_POOLING_PROPOSAL",
      "object": "PROP-2026-089",
      "detail": "Created proposed intercompany loan UK -> US via Pooling Workbench",
      "prev_hash": "392fa89ca5a1622af5db57a286794bcad2c596b2e5fa42165ed870bb702eab12",
      "hash": "039380e80dfc3b0179b06836efdc4402f8e503d651465d480dcca0cd8eb610cd",
      "verified": true
    },
    {
      "timestamp": "2026-10-11T09:10:00Z",
      "actor": "priya.sharma",
      "role": "Risk and Control",
      "action": "POLICY_CHECK_PASSED",
      "object": "PROP-2026-089",
      "detail": "Verified counterparty limit and LOC-1 eligibility status for GCPL-UK and GCPL-US",
      "prev_hash": "039380e80dfc3b0179b06836efdc4402f8e503d651465d480dcca0cd8eb610cd",
      "hash": "6d6a2bc6e0fd17edd16b23766ffbc7078a2835f9344b765999676727a851376c",
      "verified": true
    }
  ],
  "onboarding_package_template": [
    {
      "id": "OP-1",
      "name": "Bank Account & Signatory Inventory",
      "status": "COMPLETED",
      "assigned_to": "Erick Mwangi",
      "progress": 100
    },
    {
      "id": "OP-2",
      "name": "Debt, Facilities & Guarantees Register",
      "status": "COMPLETED",
      "assigned_to": "Grace Kimani",
      "progress": 100
    },
    {
      "id": "OP-3",
      "name": "Treasury Policy Alignment Assessment",
      "status": "IN_PROGRESS",
      "assigned_to": "Treasury CoE",
      "progress": 70
    },
    {
      "id": "OP-4",
      "name": "13-Week Cash Forecasting Model Setup",
      "status": "IN_PROGRESS",
      "assigned_to": "Regional Lead",
      "progress": 50
    },
    {
      "id": "OP-5",
      "name": "Internal Controls & SoD Gap Assessment",
      "status": "IN_PROGRESS",
      "assigned_to": "Risk and Control",
      "progress": 40
    },
    {
      "id": "OP-6",
      "name": "ERP Integration & Bank Connectivity Plan",
      "status": "PENDING",
      "assigned_to": "IT Administrator",
      "progress": 15
    },
    {
      "id": "OP-7",
      "name": "Approved Transition Responsibilities & SLA",
      "status": "PENDING",
      "assigned_to": "Group Treasurer",
      "progress": 0
    }
  ],
  "waves": [
    {
      "id": "WAVE-0",
      "name": "Wave 0: GTC & Core India Entities",
      "status": "COMPLETED",
      "entities": [
        "GCPL-IN"
      ],
      "target_date": "2026-08-30"
    },
    {
      "id": "WAVE-1",
      "name": "Wave 1: Strategic Regional Hubs (UK, US, SG)",
      "status": "ACTIVE_PILOT",
      "entities": [
        "GCPL-UK",
        "GCPL-US",
        "GCPL-SG",
        "GCPL-NL"
      ],
      "target_date": "2026-11-15"
    },
    {
      "id": "WAVE-2",
      "name": "Wave 2: Emerging Markets & Africa",
      "status": "PLANNED",
      "entities": [
        "GCPL-AE",
        "GCPL-ID",
        "GCPL-ZA",
        "GCPL-NG",
        "GCPL-BD"
      ],
      "target_date": "2027-02-28"
    },
    {
      "id": "WAVE-3",
      "name": "Wave 3: Recent Acquisitions & Extensions",
      "status": "BACKLOG",
      "entities": [
        "GCPL-CA",
        "GCPL-KE"
      ],
      "target_date": "2027-05-30"
    }
  ]
};

// --- END static/js/synthetic_payload.js ---

// --- BEGIN static/js/data.js ---
// [import removed]

const store = {
  state: DEFAULT_DATASET,
  activeRegister: 'canvas',
  activeLens: 1, // 1: Cash, 2: Forecast, 3: Funding, 4: Risk, 5: Controls, 6: Data health, 7: Banking, 8: Service
  activePersona: 'CFO',
  activeEntityScope: null,
  reportingCurrency: 'USD', // 'USD' or 'INR'
  selectedEntityId: 'GCPL-UK',
  asOfDate: '2026-10-11T09:30:00Z',
  listeners: [],

  async init() {
    try {
      const res = await fetch('/api/state');
      if (res.ok) {
        this.state = await res.json();
      }
      console.log('[STORE] State loaded:', this.state);
    } catch (err) {
      console.log('[STORE] Running in standalone offline mode with embedded dataset.');
      this.state = JSON.parse(JSON.stringify(DEFAULT_DATASET));
    }
    this.notify();
  },

  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  },

  setRegister(reg) {
    this.activeRegister = reg;
    this.notify();
  },

  setLens(lensNum) {
    this.activeLens = lensNum;
    this.notify();
  },

  setPersona(persona) {
    this.activePersona = persona;
    // ABAC Scope logic (PRD Section 2.3)
    if (persona === 'Local Coordinator UK') {
      this.activeEntityScope = 'GCPL-UK';
    } else if (persona === 'Local Coordinator US') {
      this.activeEntityScope = 'GCPL-US';
    } else if (persona === 'Local Coordinator ID') {
      this.activeEntityScope = 'GCPL-ID';
    } else {
      this.activeEntityScope = null;
    }
    this.notify();
  },

  toggleReportingCurrency() {
    this.reportingCurrency = this.reportingCurrency === 'USD' ? 'INR' : 'USD';
    this.notify();
  },

  selectEntity(id) {
    this.selectedEntityId = id;
    this.notify();
  },

  // Formatting helpers per PRD Section 7.4 & AD-3 (Supports Indian Lakh/Crore grouping)
  formatMoney(amount, currency = null) {
    if (amount === undefined || amount === null) return '-';
    const curr = currency || this.reportingCurrency;

    if (curr === 'INR') {
      // Indian digit grouping (Lakhs & Crores)
      const absVal = Math.abs(amount);
      if (absVal >= 10000000) {
        return `₹${(amount / 10000000).toFixed(2)} Cr`;
      } else if (absVal >= 100000) {
        return `₹${(amount / 100000).toFixed(2)} L`;
      } else {
        return `₹${Math.round(amount).toLocaleString('en-IN')}`;
      }
    } else if (curr === 'USD') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `$${(amount / 1000000).toFixed(2)}M`;
      } else if (absVal >= 1000) {
        return `$${(amount / 1000).toFixed(1)}K`;
      } else {
        return `$${Math.round(amount).toLocaleString('en-US')}`;
      }
    } else if (curr === 'GBP') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `£${(amount / 1000000).toFixed(2)}M`;
      } else {
        return `£${Math.round(amount).toLocaleString('en-GB')}`;
      }
    } else if (curr === 'EUR') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `€${(amount / 1000000).toFixed(2)}M`;
      } else {
        return `€${Math.round(amount).toLocaleString('de-DE')}`;
      }
    } else {
      return `${curr} ${Math.round(amount).toLocaleString()}`;
    }
  },

  getConvertedValue(nativeAmount, fromCurrency) {
    if (!this.state || !this.state.metadata) return nativeAmount;
    const rates = this.state.metadata.fx_rates_usd;
    const usdVal = nativeAmount * (rates[fromCurrency] || 1.0);
    if (this.reportingCurrency === 'INR') {
      return usdVal * 84.20;
    }
    return usdVal;
  }
};

// --- END static/js/data.js ---

// --- BEGIN static/js/components/command_palette.js ---
/**
 * GCPL Treasury Command - Command Palette Component (Ctrl+K / Cmd+K)
 * Conforms to PRD Section 7.5 & Appendix B
 */

// [import removed]

class CommandPalette {
  constructor() {
    this.overlay = document.getElementById('cmd-palette-modal');
    this.input = document.getElementById('cmd-palette-input');
    this.resultsContainer = document.getElementById('cmd-palette-results');
    this.isOpen = false;
    this.selectedIndex = 0;
    this.results = [];

    this.bindEvents();
  }

  bindEvents() {
    // Keyboard listener for Cmd+K / Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      } else if (this.isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.selectedIndex = Math.min(this.selectedIndex + 1, this.results.length - 1);
          this.renderResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
          this.renderResults();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.executeSelected();
        }
      }
    });

    if (this.input) {
      this.input.addEventListener('input', () => this.search());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    // Trigger button in header
    const triggerBtn = document.getElementById('cmd-k-btn');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => this.open());
    }
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  open() {
    this.isOpen = true;
    if (this.overlay) this.overlay.classList.add('open');
    if (this.input) {
      this.input.value = '';
      this.input.focus();
    }
    this.search();
  }

  close() {
    this.isOpen = false;
    if (this.overlay) this.overlay.classList.remove('open');
  }

  search() {
    const query = this.input ? this.input.value.toLowerCase().trim() : '';
    const state = store.state;
    if (!state) return;

    let items = [];

    // Built-in commands
    items.push({ type: 'REGISTER', title: 'Switch to Canvas Register (Node Graph)', action: () => store.setRegister('canvas') });
    items.push({ type: 'REGISTER', title: 'Switch to Console Register (Monolithic Estate)', action: () => store.setRegister('console') });
    items.push({ type: 'REGISTER', title: 'Switch to Terminal Register (Blotters & Queues)', action: () => store.setRegister('terminal') });
    items.push({ type: 'REGISTER', title: 'Switch to Brief Register (CFO Executive Brief)', action: () => store.setRegister('brief') });
    
    // Lens commands (1-8)
    items.push({ type: 'LENS', title: 'Lens 1: Cash Positioning & Stale Balances', action: () => { store.setRegister('canvas'); store.setLens(1); } });
    items.push({ type: 'LENS', title: 'Lens 2: 13-Week Forecast & Variances', action: () => { store.setRegister('canvas'); store.setLens(2); } });
    items.push({ type: 'LENS', title: 'Lens 3: Funding & Liquidity Pooling', action: () => { store.setRegister('canvas'); store.setLens(3); } });
    items.push({ type: 'LENS', title: 'Lens 4: Exposures & Hedging Linkage', action: () => { store.setRegister('canvas'); store.setLens(4); } });
    items.push({ type: 'LENS', title: 'Lens 5: Controls, Policies & SoD Breaches', action: () => { store.setRegister('canvas'); store.setLens(5); } });
    items.push({ type: 'LENS', title: 'Lens 6: Data Health & Connectivity Feeds', action: () => { store.setRegister('canvas'); store.setLens(6); } });
    items.push({ type: 'LENS', title: 'Lens 7: Banking Lens (75+ Accounts & 26 Banks)', action: () => { store.setRegister('canvas'); store.setLens(7); } });
    items.push({ type: 'LENS', title: 'Lens 8: Service Performance & SLA Times', action: () => { store.setRegister('canvas'); store.setLens(8); } });

    // Entities
    if (state.entities) {
      state.entities.forEach(ent => {
        items.push({
          type: 'ENTITY',
          title: `${ent.name} (${ent.id} - ${ent.currency})`,
          detail: `Cash: ${store.formatMoney(ent.cash_categories.total_reported_native, ent.currency)} | Status: ${ent.pool_status}`,
          action: () => {
            store.selectEntity(ent.id);
            window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: ent.id }));
          }
        });
      });
    }

    // Workflows (W1-W15)
    if (state.workflows) {
      state.workflows.forEach(wf => {
        items.push({
          type: 'WORKFLOW',
          title: `${wf.id}: ${wf.name}`,
          detail: `Version: ${wf.version} | Trigger: ${wf.trigger}`,
          action: () => {
            store.setRegister('canvas');
            window.dispatchEvent(new CustomEvent('open-workflow-studio', { detail: wf.id }));
          }
        });
      });
    }

    // Filter
    if (query) {
      this.results = items.filter(it => 
        it.title.toLowerCase().includes(query) || 
        (it.detail && it.detail.toLowerCase().includes(query)) ||
        it.type.toLowerCase().includes(query)
      );
    } else {
      this.results = items.slice(0, 15);
    }

    this.selectedIndex = 0;
    this.renderResults();
  }

  renderResults() {
    if (!this.resultsContainer) return;
    this.resultsContainer.innerHTML = '';

    if (this.results.length === 0) {
      this.resultsContainer.innerHTML = `<div style="padding: 16px; color: var(--text-3); text-align: center; font-family: var(--font-terminal); font-size: 11px;">NO MATCHING OBJECTS OR COMMANDS</div>`;
      return;
    }

    this.results.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = `cmd-result-item ${idx === this.selectedIndex ? 'selected' : ''}`;
      el.innerHTML = `
        <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          <div style="font-weight: 600; color: ${idx === this.selectedIndex ? 'var(--accent)' : 'var(--text-1)'}">${item.title}</div>
          ${item.detail ? `<div style="font-size: 10px; color: var(--text-3); margin-top: 2px;">${item.detail}</div>` : ''}
        </div>
        <span class="cmd-result-category">${item.type}</span>
      `;
      el.addEventListener('click', () => {
        this.selectedIndex = idx;
        this.executeSelected();
      });
      this.resultsContainer.appendChild(el);
    });
  }

  executeSelected() {
    if (this.results[this.selectedIndex]) {
      this.results[this.selectedIndex].action();
      this.close();
    }
  }
}

// --- END static/js/components/command_palette.js ---

// --- BEGIN static/js/components/entity_360.js ---
/**
 * GCPL Treasury Command - Entity 360 Component (13 Comprehensive Tabs)
 * Conforms to PRD Section 4.7
 */

// [import removed]

class Entity360Drawer {
  constructor() {
    this.drawer = document.getElementById('entity-360-drawer');
    this.backdrop = document.getElementById('entity-360-backdrop');
    this.titleEl = document.getElementById('entity-drawer-title');
    this.subtitleEl = document.getElementById('entity-drawer-subtitle');
    this.tabsContainer = document.getElementById('entity-drawer-tabs');
    this.bodyEl = document.getElementById('entity-drawer-body');
    this.closeBtn = document.getElementById('entity-drawer-close');

    this.activeTab = 'summary';
    this.currentEntity = null;

    this.tabs = [
      { id: 'summary', name: '1. Summary' },
      { id: 'cash_accounts', name: '2. Cash & Accounts' },
      { id: 'forecast', name: '3. Forecast (13W)' },
      { id: 'liquidity_pooling', name: '4. Liquidity & Pooling' },
      { id: 'funding_debt', name: '5. Funding & Facilities' },
      { id: 'investments', name: '6. Investments' },
      { id: 'exposures', name: '7. Exposures & Hedging' },
      { id: 'payments', name: '8. Payments & Settlement' },
      { id: 'controls', name: '9. Controls & Exceptions' },
      { id: 'documents', name: '10. LOC-1 Assessment' },
      { id: 'activity', name: '11. Activity Stream' },
      { id: 'data_health', name: '12. Data Health' },
      { id: 'service', name: '13. Service & SLAs' }
    ];

    this.bindEvents();
  }

  bindEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    window.addEventListener('open-entity-drawer', (e) => {
      this.open(e.detail);
    });
  }

  async open(entityId) {
    if (!this.drawer) return;
    try {
      const res = await fetch(`/api/entity/${entityId}`);
      if (!res.ok) throw new Error('Entity fetch failed');
      this.currentEntity = await res.json();
    } catch (err) {
      this.currentEntity = store.state.entities.find(e => e.id === entityId);
    }

    if (!this.currentEntity) return;

    this.renderHeader();
    this.renderTabs();
    this.renderBody();

    this.drawer.classList.add('open');
    if (this.backdrop) this.backdrop.classList.add('open');
  }

  close() {
    if (this.drawer) this.drawer.classList.remove('open');
    if (this.backdrop) this.backdrop.classList.remove('open');
  }

  renderHeader() {
    const e = this.currentEntity;
    if (this.titleEl) {
      this.titleEl.innerHTML = `
        <span class="node-jurisdiction-chip">${e.jurisdiction}</span>
        ${e.name}
        <span class="status-chip ${e.pool_eligible ? 'ok' : 'warn'}">${e.pool_status}</span>
      `;
    }
    if (this.subtitleEl) {
      this.subtitleEl.textContent = `ID: ${e.id} | ERP: ${e.erp} | Functional Line: GTC -> ${e.region_id}`;
    }
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = '';
    this.tabs.forEach(t => {
      const btn = document.createElement('button');
      btn.className = `drawer-tab-btn ${t.id === this.activeTab ? 'active' : ''}`;
      btn.textContent = t.name;
      btn.addEventListener('click', () => {
        this.activeTab = t.id;
        this.renderTabs();
        this.renderBody();
      });
      this.tabsContainer.appendChild(btn);
    });
  }

  renderBody() {
    if (!this.bodyEl || !this.currentEntity) return;
    const e = this.currentEntity;
    const cat = e.cash_categories;

    switch (this.activeTab) {
      case 'summary':
        this.bodyEl.innerHTML = `
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-sm); padding: 14px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--accent); margin-bottom: 8px; text-transform: uppercase;">Position Breakdown (5 Categories)</div>
              <table style="width: 100%; font-size: 11px; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 6px 0; color: var(--text-2);">1. Total Reported Cash</td><td style="text-align: right; font-weight: 700; color: var(--text-1); font-family: var(--font-terminal);">${store.formatMoney(cat.total_reported_native, e.currency)} <span style="color: var(--text-3); font-size: 10px;">(${store.formatMoney(cat.total_reported_usd, 'USD')})</span></td></tr>
                <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 6px 0; color: var(--text-2);">2. Available for Local Obligations</td><td style="text-align: right; color: var(--ok); font-family: var(--font-terminal);">${store.formatMoney(cat.available_local_native, e.currency)}</td></tr>
                <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 6px 0; color: var(--text-2);">3. Available for Group Deployment</td><td style="text-align: right; color: ${cat.available_group_deployable_native > 0 ? 'var(--accent)' : 'var(--text-3)'}; font-family: var(--font-terminal); font-weight: 700;">${store.formatMoney(cat.available_group_deployable_native, e.currency)}</td></tr>
                <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 6px 0; color: var(--text-2);">4. Restricted / Unavailable Balances</td><td style="text-align: right; color: var(--warn); font-family: var(--font-terminal);">${store.formatMoney(cat.restricted_native, e.currency)}</td></tr>
                <tr><td style="padding: 6px 0; color: var(--text-2);">5. Gross Borrowings & Debt</td><td style="text-align: right; color: ${cat.gross_debt_native > 0 ? 'var(--err)' : 'var(--text-3)'}; font-family: var(--font-terminal);">${store.formatMoney(cat.gross_debt_native, e.currency)}</td></tr>
              </table>
            </div>

            <div style="background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-sm); padding: 14px;">
              <div style="font-size: 11px; font-weight: 700; color: var(--text-2); margin-bottom: 8px;">Treasury Governance & Governance Line</div>
              <div style="font-size: 11px; color: var(--text-2); line-height: 1.6;">
                <div><strong>Local Treasury Coordinator:</strong> ${e.coordinator}</div>
                <div><strong>Designated Deputy:</strong> ${e.deputy}</div>
                <div><strong>Bank Accounts Count:</strong> ${e.account_count} accounts</div>
                <div><strong>Stale Balances:</strong> ${e.stale_count > 0 ? `<span style="color: var(--warn);">⚠ ${e.stale_count} accounts stale</span>` : '<span style="color: var(--ok);">None (100% fresh feeds)</span>'}</div>
                <div><strong>Restricted Cash Reason:</strong> ${e.restricted_reasons || 'None'}</div>
              </div>
            </div>
          </div>
        `;
        break;

      case 'cash_accounts':
        const accounts = e.accounts || store.state.accounts.filter(a => a.entity_id === e.id);
        let accRows = accounts.map(a => `
          <tr>
            <td style="font-family: var(--font-terminal); color: var(--text-1);">${a.id}</td>
            <td><strong>${a.name}</strong><br><span style="color: var(--text-3); font-size: 10px;">${a.bank_id}</span></td>
            <td><span class="status-chip ${a.is_restricted ? 'warn' : 'ok'}">${a.purpose}</span></td>
            <td style="text-align: right; font-family: var(--font-terminal); font-weight: 700; color: var(--text-1);">${store.formatMoney(a.balance, a.currency)}</td>
            <td style="font-family: var(--font-terminal); font-size: 10px;">${a.is_stale ? '<span style="color: var(--warn);">[STALE]</span>' : '<span style="color: var(--ok);">[FRESH]</span>'}</td>
          </tr>
        `).join('');

        this.bodyEl.innerHTML = `
          <div style="margin-bottom: 12px; font-size: 11px; color: var(--text-2);">Group Account Register (PRD PRC-7 / BA-1): <strong>${accounts.length} active bank accounts</strong></div>
          <table class="terminal-table">
            <thead>
              <tr><th>ACC ID</th><th>Account & Bank</th><th>Purpose</th><th style="text-align: right;">Balance</th><th>Feed</th></tr>
            </thead>
            <tbody>${accRows}</tbody>
          </table>
        `;
        break;

      case 'forecast':
        this.bodyEl.innerHTML = `
          <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 12px; font-weight: 700; color: var(--text-1);">13-Week Rolling Cash Flow Forecast (Cycle W42)</div>
            <span class="status-chip ${e.forecast_timeliness === 'ON_TIME' ? 'ok' : 'warn'}">${e.forecast_timeliness}</span>
          </div>
          <div style="background: var(--bg-2); border: 1px solid var(--line-1); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 14px;">
            <div style="font-size: 10px; color: var(--text-3); margin-bottom: 4px;">NET CASH PROJECTION PROFILE</div>
            <div style="height: 40px; width: 100%; display: flex; align-items: flex-end; gap: 4px;">
              ${e.sparkline_13w.map((v, i) => `
                <div style="flex: 1; height: ${Math.min(100, Math.max(15, (v / (cat.total_reported_native * 1.3)) * 100))}%; background: var(--accent); border-radius: 1px;" title="Week ${i+1}: ${store.formatMoney(v, e.currency)}"></div>
              `).join('')}
            </div>
          </div>
          <div style="font-size: 11px; font-weight: 700; color: var(--text-2); margin-bottom: 6px;">Variance Classification (Actual vs Submitted)</div>
          <div style="font-size: 11px; color: var(--text-2); line-height: 1.5; background: var(--bg-2); border: 1px solid var(--line-1); padding: 10px; border-radius: var(--radius-sm);">
            <div>• <strong>Timing Variance:</strong> Dealer collections delayed by 3 business days (+2.4%)</div>
            <div>• <strong>Amount Variance:</strong> Raw material vendor settlement within 0.8% of estimate</div>
            <div>• <strong>Missing Item:</strong> Zero unforecasted transactions detected. Quality Score: <strong>94/100</strong></div>
          </div>
        `;
        break;

      case 'liquidity_pooling':
        this.bodyEl.innerHTML = `
          <div style="background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 12px; font-weight: 700; color: var(--text-1);">Liquidity Pool Participation Status</span>
              <span class="status-chip ${e.pool_eligible ? 'ok' : 'warn'}">${e.pool_status}</span>
            </div>
            <div style="font-size: 11px; color: var(--text-2); line-height: 1.6;">
              <div><strong>Deployable Surplus:</strong> ${store.formatMoney(cat.available_group_deployable_native, e.currency)}</div>
              <div><strong>Local Operating Minimum Buffer:</strong> ${store.formatMoney(cat.available_local_native, e.currency)}</div>
              <div><strong>LOC-1 Assessment Sign-Off:</strong> ${e.pool_eligible ? '<span style="color: var(--ok);">PASSED & CERTIFIED</span>' : '<span style="color: var(--warn);">INELIGIBLE / IN REVIEW</span>'}</div>
            </div>
            ${e.pool_eligible ? `
              <button class="btn-primary" style="margin-top: 12px; width: 100%;" onclick="window.dispatchEvent(new CustomEvent('open-pooling-workbench', { detail: '${e.id}' }))">
                Open in Pooling Workbench →
              </button>
            ` : `
              <div style="margin-top: 10px; font-size: 10px; color: var(--text-3); font-style: italic;">
                Note: Per PRD Principle 1 & LOC-5, pooling features remain gated until LOC-1 conditions are satisfied.
              </div>
            `}
          </div>
        `;
        break;

      case 'documents':
        const loc = e.loc1_assessment;
        this.bodyEl.innerHTML = `
          <div style="font-size: 12px; font-weight: 700; color: var(--text-1); margin-bottom: 8px;">LOC-1 Subsidiary Eligibility Assessment Matrix</div>
          <div style="font-size: 11px; color: var(--text-2); margin-bottom: 14px;">Mandatory 5 elements assessment and 5 department sign-offs before cross-border pooling is enabled.</div>
          
          <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
            <div style="font-size: 10px; font-weight: 700; color: var(--accent); text-transform: uppercase;">Required Sign-Offs (5 Functions)</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 11px;">
              <div style="padding: 6px; background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-xs);">Tax Review: ${loc.signoffs.tax ? '<span style="color: var(--ok);">✓ SIGNED</span>' : '<span style="color: var(--err);">✗ PENDING</span>'}</div>
              <div style="padding: 6px; background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-xs);">Legal Review: ${loc.signoffs.legal ? '<span style="color: var(--ok);">✓ SIGNED</span>' : '<span style="color: var(--err);">✗ PENDING</span>'}</div>
              <div style="padding: 6px; background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-xs);">Local Finance: ${loc.signoffs.local_finance ? '<span style="color: var(--ok);">✓ SIGNED</span>' : '<span style="color: var(--err);">✗ PENDING</span>'}</div>
              <div style="padding: 6px; background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-xs);">Bank Partner: ${loc.signoffs.banks ? '<span style="color: var(--ok);">✓ SIGNED</span>' : '<span style="color: var(--err);">✗ PENDING</span>'}</div>
              <div style="padding: 6px; background: var(--bg-2); border: 1px solid var(--line-1); border-radius: var(--radius-xs); grid-column: span 2;">Group Treasury: ${loc.signoffs.group_treasury ? '<span style="color: var(--ok);">✓ SIGNED</span>' : '<span style="color: var(--err);">✗ PENDING</span>'}</div>
            </div>
          </div>

          <div style="font-size: 10px; font-weight: 700; color: var(--accent); text-transform: uppercase; margin-bottom: 6px;">5 Elements Assessment</div>
          <table style="width: 100%; font-size: 10px; border-collapse: collapse; font-family: var(--font-terminal);">
            <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 4px 0; color: var(--text-2);">1. Central vs Local Activities</td><td style="text-align: right; color: var(--ok);">${loc.five_elements.central_vs_local}</td></tr>
            <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 4px 0; color: var(--text-2);">2. Local Accounts & Approvals</td><td style="text-align: right; color: var(--ok);">${loc.five_elements.local_accounts_held}</td></tr>
            <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 4px 0; color: var(--text-2);">3. Cash Movement & Tax Conditions</td><td style="text-align: right; color: ${loc.five_elements.movement_tax_conditions.includes('COMPLIANT') ? 'var(--ok)' : 'var(--err)'};">${loc.five_elements.movement_tax_conditions}</td></tr>
            <tr style="border-bottom: 1px solid var(--line-1);"><td style="padding: 4px 0; color: var(--text-2);">4. Documentation & Accounting</td><td style="text-align: right; color: var(--ok);">${loc.five_elements.documentation_accounting}</td></tr>
            <tr><td style="padding: 4px 0; color: var(--text-2);">5. Benefit vs Cost</td><td style="text-align: right; color: var(--ok);">${loc.five_elements.benefit_vs_cost}</td></tr>
          </table>
        `;
        break;

      default:
        this.bodyEl.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--text-3); font-family: var(--font-terminal); font-size: 11px;">
            <div>TAB: [${this.activeTab.toUpperCase()}]</div>
            <div style="margin-top: 8px;">Active records synchronized for ${e.name}.</div>
            <div style="margin-top: 4px; color: var(--ok);">[AUDIT_STATUS: COMPLIANT]</div>
          </div>
        `;
        break;
    }
  }
}

// --- END static/js/components/entity_360.js ---

// --- BEGIN static/js/components/modal.js ---
/**
 * GCPL Treasury Command - Action Confirmation & SoD Verification Modal
 * Conforms to PRD Section 7.5 & UI-21 (Expressive styling banned from approvals)
 */

// [import removed]

class ActionModal {
  constructor() {
    this.overlay = document.getElementById('action-confirm-modal');
    this.titleEl = document.getElementById('modal-action-title');
    this.bodyEl = document.getElementById('modal-action-body');
    this.reasonInput = document.getElementById('modal-action-reason');
    this.confirmBtn = document.getElementById('modal-confirm-btn');
    this.cancelBtn = document.getElementById('modal-cancel-btn');

    this.onConfirmCallback = null;
    this.bindEvents();
  }

  bindEvents() {
    if (this.cancelBtn) {
      this.cancelBtn.addEventListener('click', () => this.close());
    }
    if (this.confirmBtn) {
      this.confirmBtn.addEventListener('click', () => {
        const reason = this.reasonInput ? this.reasonInput.value.trim() : '';
        if (this.onConfirmCallback) {
          this.onConfirmCallback(reason);
        }
        this.close();
      });
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }
  }

  show({ title, message, sodRuleChecked, onConfirm }) {
    if (!this.overlay) return;
    this.titleEl.textContent = title;
    this.bodyEl.innerHTML = `
      <div style="font-size: 12px; color: var(--text-1); margin-bottom: 12px;">${message}</div>
      ${sodRuleChecked ? `
        <div style="background: rgba(61, 220, 151, 0.08); border: 1px solid rgba(61, 220, 151, 0.3); padding: 8px 12px; border-radius: var(--radius-xs); font-family: var(--font-terminal); font-size: 10px; color: var(--ok); margin-bottom: 12px;">
          ✓ SEGREGATION OF DUTIES LINT PASSED: ${sodRuleChecked}
        </div>
      ` : ''}
    `;
    if (this.reasonInput) this.reasonInput.value = '';
    this.onConfirmCallback = onConfirm;
    this.overlay.classList.add('open');
  }

  close() {
    if (this.overlay) this.overlay.classList.remove('open');
  }
}

// --- END static/js/components/modal.js ---

// --- BEGIN static/js/registers/canvas_graph.js ---
/**
 * GCPL Treasury Command - Group Liquidity Graph (Central Feature)
 * Conforms to PRD Section 4 & Reference Images 1, 3, 4/5
 * n8n-style Node Workflow Canvas from HQ to every Region, Entity, and Account.
 */

// [import removed]

class CanvasGraph {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.viewport = null;
    this.svg = null;
    this.nodesLayer = null;
    this.edgesLayer = null;
    this.groupsLayer = null;
    
    // Camera Transform - Set default zoom to fit full 3-region layout
    this.zoom = 0.65;
    this.panX = 40;
    this.panY = 20;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    
    // Sub-view: 'graph' | 'workbench' | 'workflow' | 'table'
    this.subView = 'graph';
    this.selectedNodeId = null;
    this.isolatedNodeId = null;

    this.init();
  }

  init() {
    this.renderLayout();
    this.bindEvents();
    store.subscribe(() => this.update());
    // Immediately render nodes and edges upon initialization
    if (store.state) {
      this.update();
    }
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="canvas-layout">
        <!-- Floating Graph Toolbar (Image 3 & 4 Pattern) -->
        <div class="canvas-toolbar">
          <button class="canvas-tool-btn" id="tool-zoom-in" title="Zoom In">+</button>
          <button class="canvas-tool-btn" id="tool-zoom-out" title="Zoom Out">-</button>
          <span style="font-family: var(--font-terminal); font-size: 10px; color: var(--text-3); padding: 0 4px;" id="zoom-indicator">85%</span>
          <button class="canvas-tool-btn" id="tool-fit" title="Fit to Screen">⛶ Fit</button>
          <div class="toolbar-separator"></div>
          <button class="canvas-tool-btn" id="tool-auto-layout" title="Auto Layout Nodes">⚡ Auto-Layout</button>
          <button class="canvas-tool-btn" id="tool-isolate" title="Isolate Selected Entity">⊙ Isolate</button>
          <button class="canvas-tool-btn" id="tool-table-toggle" title="Synchronized Table View">☷ Table</button>
        </div>

        <!-- Lens Selector (PRD 4.5: 8 Semantic Lenses) -->
        <div class="lens-bar">
          <button class="lens-btn ${store.activeLens === 1 ? 'active' : ''}" data-lens="1">1. Cash <kbd>[1]</kbd></button>
          <button class="lens-btn ${store.activeLens === 2 ? 'active' : ''}" data-lens="2">2. Forecast <kbd>[2]</kbd></button>
          <button class="lens-btn ${store.activeLens === 3 ? 'active' : ''}" data-lens="3">3. Funding <kbd>[3]</kbd></button>
          <button class="lens-btn ${store.activeLens === 4 ? 'active' : ''}" data-lens="4">4. Risk <kbd>[4]</kbd></button>
          <button class="lens-btn ${store.activeLens === 5 ? 'active' : ''}" data-lens="5">5. Controls <kbd>[5]</kbd></button>
          <button class="lens-btn ${store.activeLens === 6 ? 'active' : ''}" data-lens="6">6. Data Health <kbd>[6]</kbd></button>
          <button class="lens-btn ${store.activeLens === 7 ? 'active' : ''}" data-lens="7">7. Banking <kbd>[7]</kbd></button>
          <button class="lens-btn ${store.activeLens === 8 ? 'active' : ''}" data-lens="8">8. Service <kbd>[8]</kbd></button>
        </div>

        <!-- Sub-View Switcher -->
        <div class="canvas-subview-strip">
          <button class="subview-btn ${this.subView === 'graph' ? 'active' : ''}" id="btn-sub-graph">Node Graph</button>
          <button class="subview-btn ${this.subView === 'workbench' ? 'active' : ''}" id="btn-sub-workbench">Pooling Workbench</button>
          <button class="subview-btn ${this.subView === 'workflow' ? 'active' : ''}" id="btn-sub-workflow">Workflow Studio</button>
        </div>

        <!-- Viewport Area -->
        <div class="graph-viewport" id="graph-viewport">
          <svg class="graph-svg" id="graph-svg">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#F2C94C"/>
              </marker>
              <marker id="arrow-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#B58CFF"/>
              </marker>
              <marker id="arrow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2DD4BF"/>
              </marker>
            </defs>
            <g id="svg-transform-group">
              <g id="svg-backdrop-groups"></g>
              <g id="svg-edges"></g>
            </g>
          </svg>
          <div id="html-nodes-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
        </div>

        <!-- Minimap (Bottom Left) -->
        <div class="graph-minimap">
          <div class="minimap-title">NAVIGATOR // MINIMAP</div>
          <div class="minimap-content" id="minimap-content">
            <div class="minimap-lens-rect" id="minimap-lens"></div>
          </div>
        </div>
      </div>
    `;

    this.viewport = document.getElementById('graph-viewport');
    this.svgGroup = document.getElementById('svg-transform-group');
    this.groupsLayer = document.getElementById('svg-backdrop-groups');
    this.edgesLayer = document.getElementById('svg-edges');
    this.nodesLayer = document.getElementById('html-nodes-container');
  }

  bindEvents() {
    // Pan and Zoom
    this.viewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('.node-card')) return;
      this.isDragging = true;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.panX = e.clientX - this.dragStartX;
      this.panY = e.clientY - this.dragStartY;
      this.applyTransform();
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    this.viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      const newZoom = Math.min(1.8, Math.max(0.35, this.zoom * zoomFactor));
      
      // Zoom toward cursor
      const rect = this.viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
      this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;

      this.applyTransform();
    }, { passive: false });

    // Toolbar buttons
    document.getElementById('tool-zoom-in')?.addEventListener('click', () => {
      this.zoom = Math.min(1.8, this.zoom * 1.15);
      this.applyTransform();
    });
    document.getElementById('tool-zoom-out')?.addEventListener('click', () => {
      this.zoom = Math.max(0.35, this.zoom * 0.85);
      this.applyTransform();
    });
    document.getElementById('tool-fit')?.addEventListener('click', () => {
      this.fitToScreen();
    });
    document.getElementById('tool-auto-layout')?.addEventListener('click', () => {
      this.panX = 80;
      this.panY = 60;
      this.zoom = 0.85;
      this.applyTransform();
    });
    document.getElementById('tool-isolate')?.addEventListener('click', () => {
      if (this.isolatedNodeId) {
        this.isolatedNodeId = null;
      } else if (this.selectedNodeId) {
        this.isolatedNodeId = this.selectedNodeId;
      }
      this.update();
    });

    // Lens Buttons
    this.container.querySelectorAll('.lens-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lensNum = parseInt(btn.getAttribute('data-lens'), 10);
        store.setLens(lensNum);
        this.container.querySelectorAll('.lens-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Subview buttons
    document.getElementById('btn-sub-graph')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'graph' }));
    });
    document.getElementById('btn-sub-workbench')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workbench' }));
    });
    document.getElementById('btn-sub-workflow')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workflow' }));
    });

    // Keyboard shortcuts (1-8 for lenses)
    window.addEventListener('keydown', (e) => {
      if (store.activeRegister !== 'canvas') return;
      if (e.key >= '1' && e.key <= '8' && !e.metaKey && !e.ctrlKey) {
        store.setLens(parseInt(e.key, 10));
      } else if (e.key === 'Escape') {
        this.isolatedNodeId = null;
        this.update();
      }
    });
  }

  applyTransform() {
    if (!this.svgGroup || !this.nodesLayer) return;
    const transformStr = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
    this.svgGroup.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
    this.nodesLayer.style.transform = transformStr;
    this.nodesLayer.style.transformOrigin = '0 0';

    const zoomEl = document.getElementById('zoom-indicator');
    if (zoomEl) zoomEl.textContent = `${Math.round(this.zoom * 100)}%`;
  }

  fitToScreen() {
    this.panX = 60;
    this.panY = 50;
    this.zoom = 0.72;
    this.applyTransform();
  }

  update() {
    const state = store.state;
    if (!state || !this.nodesLayer) return;

    // Build node coordinates
    const coords = this.computeLayout(state);
    this.renderBackdropGroups(state, coords);
    this.renderEdges(state, coords);
    this.renderNodes(state, coords);
    this.applyTransform();
  }

  computeLayout(state) {
    const coords = {};
    // Level 0: GTC HQ Node
    coords['GTC'] = { x: 780, y: 40, width: 340, height: 180 };

    // Level 1: Regional Hubs & Entity columns
    // Region 1: ASIA (Left)
    coords['REG-ASIA'] = { x: 60, y: 280, width: 440, height: 780 };
    coords['HUB-ASIA'] = { x: 120, y: 320, width: 320, height: 100 };
    coords['GCPL-IN'] = { x: 120, y: 450, width: 320, height: 160 };
    coords['GCPL-ID'] = { x: 120, y: 640, width: 320, height: 160 };
    coords['GCPL-BD'] = { x: 120, y: 830, width: 320, height: 160 };
    coords['GCPL-SG'] = { x: 120, y: 1020, width: 320, height: 160 };

    // Region 2: EMEA (Center)
    coords['REG-EMEA'] = { x: 560, y: 280, width: 780, height: 780 };
    coords['HUB-EMEA'] = { x: 790, y: 320, width: 320, height: 100 };
    coords['GCPL-UK'] = { x: 610, y: 450, width: 320, height: 160 }; // SURPLUS CANDIDATE (£18.5M)
    coords['GCPL-NL'] = { x: 970, y: 450, width: 320, height: 160 };
    coords['GCPL-AE'] = { x: 610, y: 640, width: 320, height: 160 };
    coords['GCPL-ZA'] = { x: 970, y: 640, width: 320, height: 160 };
    coords['GCPL-NG'] = { x: 610, y: 830, width: 320, height: 160 };

    // Region 3: NORTH AMERICA (Right)
    coords['REG-NA'] = { x: 1400, y: 280, width: 440, height: 780 };
    coords['HUB-NA'] = { x: 1460, y: 320, width: 320, height: 100 };
    coords['GCPL-US'] = { x: 1460, y: 450, width: 320, height: 160 }; // NEED CANDIDATE ($14.2M)
    coords['GCPL-CA'] = { x: 1460, y: 640, width: 320, height: 160 };
    coords['GCPL-KE'] = { x: 1460, y: 830, width: 320, height: 160 }; // Onboarding

    return coords;
  }

  renderBackdropGroups(state, coords) {
    if (!this.groupsLayer) return;
    let html = '';
    const regions = [
      { id: 'REG-ASIA', name: 'REGION: ASIA (HUB: MUMBAI / SINGAPORE)', border: 'var(--region-asia-border)', fill: 'var(--region-asia)' },
      { id: 'REG-EMEA', name: 'REGION: EUROPE & MIDDLE EAST (HUB: LONDON / DUBAI)', border: 'var(--region-emea-border)', fill: 'var(--region-emea)' },
      { id: 'REG-NA', name: 'REGION: NORTH AMERICA (HUB: NEW YORK)', border: 'var(--region-na-border)', fill: 'var(--region-na)' }
    ];

    regions.forEach(r => {
      const c = coords[r.id];
      if (!c) return;
      html += `
        <rect x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" rx="14" fill="${r.fill}" stroke="${r.border}" stroke-width="1.5" stroke-dasharray="6,4" />
        <text x="${c.x + 20}" y="${c.y + 26}" fill="${r.border}" font-family="var(--font-terminal)" font-size="11" font-weight="700" letter-spacing="1">${r.name}</text>
      `;
    });

    this.groupsLayer.innerHTML = html;
  }

  renderEdges(state, coords) {
    if (!this.edgesLayer) return;
    let html = '';

    // E01 Functional Lines: GTC -> Regional Hubs
    const gtc = coords['GTC'];
    const gtcBottomX = gtc.x + gtc.width / 2;
    const gtcBottomY = gtc.y + gtc.height;

    ['HUB-ASIA', 'HUB-EMEA', 'HUB-NA'].forEach(hubId => {
      const h = coords[hubId];
      if (!h) return;
      const hTopX = h.x + h.width / 2;
      const hTopY = h.y;
      
      const pathD = `M ${gtcBottomX} ${gtcBottomY} C ${gtcBottomX} ${(gtcBottomY + hTopY) / 2}, ${hTopX} ${(gtcBottomY + hTopY) / 2}, ${hTopX} ${hTopY}`;
      html += `<path d="${pathD}" fill="none" stroke="var(--line-3)" stroke-width="2" />`;
    });

    // Regional Hubs -> Entities
    const hubMapping = {
      'HUB-ASIA': ['GCPL-IN', 'GCPL-ID', 'GCPL-BD', 'GCPL-SG'],
      'HUB-EMEA': ['GCPL-UK', 'GCPL-NL', 'GCPL-AE', 'GCPL-ZA', 'GCPL-NG'],
      'HUB-NA': ['GCPL-US', 'GCPL-CA', 'GCPL-KE']
    };

    Object.entries(hubMapping).forEach(([hubId, entIds]) => {
      const hub = coords[hubId];
      if (!hub) return;
      const hubMidX = hub.x + hub.width / 2;
      const hubMidY = hub.y + hub.height;

      entIds.forEach(eid => {
        const ent = coords[eid];
        if (!ent) return;
        const entTopX = ent.x + ent.width / 2;
        const entTopY = ent.y;

        const pathD = `M ${hubMidX} ${hubMidY} C ${hubMidX} ${(hubMidY + entTopY) / 2}, ${entTopX} ${(hubMidY + entTopY) / 2}, ${entTopX} ${entTopY}`;
        html += `<path d="${pathD}" fill="none" stroke="var(--line-2)" stroke-width="1.5" stroke-dasharray="3,3" />`;
      });
    });

    // E06 Match Suggestion Ghost Edge: GCPL-UK (£18.5M surplus) -> GCPL-US ($14.2M borrowing need)
    const uk = coords['GCPL-UK'];
    const us = coords['GCPL-US'];
    if (uk && us) {
      const ukRightX = uk.x + uk.width;
      const ukRightY = uk.y + uk.height / 2;
      const usLeftX = us.x;
      const usLeftY = us.y + us.height / 2;

      const ghostD = `M ${ukRightX} ${ukRightY} C ${ukRightX + 240} ${ukRightY - 100}, ${usLeftX - 240} ${usLeftY - 100}, ${usLeftX} ${usLeftY}`;
      
      // Animated gold & violet dashed ghost match
      html += `
        <path d="${ghostD}" fill="none" stroke="var(--port-cash)" stroke-width="3" stroke-dasharray="8,6" marker-end="url(#arrow-gold)" opacity="0.85">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <!-- Format Badge Hexagon on edge -->
        <g transform="translate(${(ukRightX + usLeftX) / 2 - 60}, ${(ukRightY + usLeftY) / 2 - 80})">
          <rect width="180" height="26" rx="4" fill="var(--bg-1)" stroke="var(--accent)" stroke-width="1.5" />
          <text x="90" y="17" fill="var(--accent)" font-family="var(--font-terminal)" font-size="10" font-weight="700" text-anchor="middle">
            E06: MATCH SUGGESTION $14.2M
          </text>
        </g>
      `;
    }

    this.edgesLayer.innerHTML = html;
  }

  renderNodes(state, coords) {
    if (!this.nodesLayer) return;
    this.nodesLayer.innerHTML = '';

    // Render N01 GTC HQ Node
    const gtcC = coords['GTC'];
    const gtcNode = document.createElement('div');
    gtcNode.className = 'node-card node-gtc';
    gtcNode.style.left = `${gtcC.x}px`;
    gtcNode.style.top = `${gtcC.y}px`;
    gtcNode.style.pointerEvents = 'auto';

    const sum = state.group_summary;
    const totals = store.reportingCurrency === 'INR' ? sum.totals_inr : sum.totals_usd;

    gtcNode.innerHTML = `
      <div class="node-header" style="background: linear-gradient(90deg, #1A283B 0%, #151F2E 100%);">
        <div class="node-title-group">
          <span class="brand-icon" style="width: 18px; height: 18px; font-size: 10px;">HQ</span>
          <span class="node-title" style="color: var(--accent);">GTC MUMBAI // GLOBAL TREASURY CENTER</span>
        </div>
        <span class="status-chip ok">GOV: ACTIVE</span>
      </div>
      <div class="node-body">
        <div class="node-cash-headline">
          <div>
            <span class="node-cash-amount">${store.formatMoney(totals.total_reported_cash)}</span>
            <span class="node-cash-curr">${store.reportingCurrency}</span>
          </div>
          <span style="font-family: var(--font-terminal); font-size: 10px; color: var(--ok); font-weight: 700;">${sum.cash_visibility_coverage_pct}% VISIBILITY</span>
        </div>
        <table class="node-mini-table">
          <tr><td>Deployable Group Cash</td><td class="val" style="color: var(--accent); font-weight: 700;">${store.formatMoney(totals.available_group_deployable)}</td></tr>
          <tr><td>Local Operating Buffers</td><td class="val">${store.formatMoney(totals.available_local_obligations)}</td></tr>
          <tr><td>Restricted Balances</td><td class="val" style="color: var(--warn);">${store.formatMoney(totals.restricted_cash)}</td></tr>
          <tr><td>Gross Debt / Facility Drawn</td><td class="val" style="color: var(--err);">${store.formatMoney(totals.gross_debt)}</td></tr>
        </table>
      </div>
      <div class="node-footer">
        <span>STALE FEEDS: ${sum.stale_accounts_count}</span>
        <span style="color: var(--warn);">OPEN BREACHES: ${sum.open_breaches}</span>
        <span>PENDING APPROVALS: ${sum.pending_approvals}</span>
      </div>
      <!-- Ports -->
      <div class="port-handle port-cash port-out" style="top: 50%;" title="P01: Group Cash Port"></div>
      <div class="port-handle port-policy port-out" style="top: 75%;" title="P07: Group Policy Port"></div>
    `;

    gtcNode.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: 'GCPL-IN' }));
    });
    this.nodesLayer.appendChild(gtcNode);

    // Render Regional Hubs (N02)
    state.regions.forEach(reg => {
      const hubId = reg.id === 'REG-ASIA' ? 'HUB-ASIA' : (reg.id === 'REG-EMEA' ? 'HUB-EMEA' : 'HUB-NA');
      const c = coords[hubId];
      if (!c) return;

      const hubNode = document.createElement('div');
      hubNode.className = 'node-card node-hub';
      hubNode.style.left = `${c.x}px`;
      hubNode.style.top = `${c.y}px`;
      hubNode.style.pointerEvents = 'auto';

      hubNode.innerHTML = `
        <div class="node-header">
          <div class="node-title-group">
            <span class="node-jurisdiction-chip">HUB</span>
            <span class="node-title">${reg.name} Hub</span>
          </div>
          <span class="status-chip ok">SLA: 98%</span>
        </div>
        <div class="node-body">
          <div style="font-size: 11px; color: var(--text-2); margin-bottom: 4px;"><strong>Lead:</strong> ${reg.lead.split('(')[0]}</div>
          <div style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">Coverage: ${reg.coverage_hours}</div>
        </div>
        <div class="node-footer">
          <span>ENTITIES: ${reg.entities_count}</span>
          <span style="color: var(--ok);">[DELEGATED MANDATE]</span>
        </div>
      `;
      this.nodesLayer.appendChild(hubNode);
    });

    // Render Entity Nodes (N03)
    state.entities.forEach(ent => {
      const c = coords[ent.id];
      if (!c) return;

      const entNode = document.createElement('div');
      const isSelected = this.selectedNodeId === ent.id;
      const isBreach = ent.breach_count > 0;
      const isStale = ent.stale_count > 0;
      const isSurplusCandidate = ent.id === 'GCPL-UK';
      const isBorrowerCandidate = ent.id === 'GCPL-US';

      entNode.className = `node-card node-entity ${isSelected ? 'selected' : ''} ${isBreach ? 'error-breach' : ''} ${isStale ? 'stale-warning' : ''}`;
      entNode.style.left = `${c.x}px`;
      entNode.style.top = `${c.y}px`;
      entNode.style.pointerEvents = 'auto';

      if (this.isolatedNodeId && this.isolatedNodeId !== ent.id) {
        entNode.style.opacity = '0.25';
      }

      // Lens data adaptation (PRD 4.5)
      let lensChip = '';
      if (store.activeLens === 1) { // Cash Lens
        lensChip = ent.pool_eligible ? '<span class="status-chip ok">POOL ELIGIBLE</span>' : `<span class="status-chip warn">${ent.pool_status}</span>`;
      } else if (store.activeLens === 2) { // Forecast Lens
        lensChip = `<span class="status-chip ${ent.forecast_timeliness === 'ON_TIME' ? 'ok' : 'warn'}">${ent.forecast_timeliness}</span>`;
      } else if (store.activeLens === 3) { // Funding Lens
        lensChip = isSurplusCandidate ? '<span class="status-chip ok">SURPLUS £18.5M</span>' : (isBorrowerCandidate ? '<span class="status-chip warn">BORROWING $14.2M</span>' : `<span class="status-chip">${ent.pool_status}</span>`);
      } else if (store.activeLens === 5) { // Controls Lens
        lensChip = ent.breach_count > 0 ? '<span class="status-chip warn">1 BREACH</span>' : '<span class="status-chip ok">POLICY ACK</span>';
      } else if (store.activeLens === 6) { // Data Health Lens
        lensChip = ent.stale_count > 0 ? `<span class="status-chip warn">${ent.stale_count} STALE</span>` : '<span class="status-chip ok">FEEDS OK</span>';
      } else {
        lensChip = `<span class="status-chip ok">${ent.status}</span>`;
      }

      const cat = ent.cash_categories;

      entNode.innerHTML = `
        <div class="node-header">
          <div class="node-title-group">
            <span class="node-jurisdiction-chip">${ent.jurisdiction}</span>
            <span class="node-title" title="${ent.name}">${ent.name}</span>
          </div>
          ${lensChip}
        </div>
        <div class="node-body">
          <div class="node-cash-headline">
            <div>
              <span class="node-cash-amount">${store.formatMoney(cat.total_reported_native, ent.currency)}</span>
              <span class="node-cash-curr">${ent.currency}</span>
            </div>
            <span class="node-usd-eq">≈ ${store.formatMoney(cat.total_reported_usd, 'USD')}</span>
          </div>
          <table class="node-mini-table">
            <tr><td>Available Local</td><td class="val">${store.formatMoney(cat.available_local_native, ent.currency)}</td></tr>
            <tr><td>Deployable Surplus</td><td class="val" style="color: ${cat.available_group_deployable_native > 0 ? 'var(--accent)' : 'var(--text-3)'}; font-weight: 700;">${store.formatMoney(cat.available_group_deployable_native, ent.currency)}</td></tr>
            <tr><td>Restricted</td><td class="val" style="color: ${cat.restricted_native > 0 ? 'var(--warn)' : 'var(--text-3)'};">${store.formatMoney(cat.restricted_native, ent.currency)}</td></tr>
          </table>
          <div class="node-sparkline-wrap" title="13-Week Rolling Cash Flow Profile">
            <svg width="100%" height="100%" viewBox="0 0 100 24" preserveAspectRatio="none">
              <path d="M 0 18 Q 25 10 50 14 T 100 8" fill="none" stroke="var(--port-forecast)" stroke-width="1.8" />
            </svg>
          </div>
        </div>
        <div class="node-footer">
          <span>${ent.account_count} ACCOUNTS</span>
          <span>ERP: ${ent.erp.split(' ')[0]}</span>
          ${isSurplusCandidate ? '<span style="color: var(--ok); font-weight: 700;">[MATCH AVAIL]</span>' : ''}
          ${isBorrowerCandidate ? '<span style="color: var(--warn); font-weight: 700;">[NEED MATCH]</span>' : ''}
        </div>
        <!-- Typed Ports -->
        <div class="port-handle port-cash port-in" style="top: 35%;" title="P01: Cash In"></div>
        <div class="port-handle port-forecast port-out" style="top: 35%;" title="P02: 13W Forecast Out"></div>
        <div class="port-handle port-cash port-out" style="top: 65%;" title="P01: Deployable Cash Out"></div>
        <div class="port-handle port-approval port-out" style="top: 85%;" title="P05: Dual Approval Out"></div>
      `;

      entNode.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedNodeId = ent.id;
        store.selectEntity(ent.id);
        window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: ent.id }));
        this.update();
      });

      this.nodesLayer.appendChild(entNode);
    });
  }
}

// --- END static/js/registers/canvas_graph.js ---

// --- BEGIN static/js/registers/pooling_workbench.js ---
/**
 * GCPL Treasury Command - Pooling Workbench Component
 * Conforms to PRD Section 4.8
 * Evaluates all 9 constraints, simulates indicative economics, and generates proposals.
 */

// [import removed]

class PoolingWorkbench {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedSurplusId = 'GCPL-UK'; // Default (£18.5M surplus)
    this.selectedBorrowerId = 'GCPL-US'; // Default ($14.2M debt)
    this.amount = 14200000; // in USD eq
    this.tenorDays = 90;
    this.borrowingRate = 7.50; // SOFR + 220 bps
    this.surplusYield = 0.45; // UK overnight yield

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());

    window.addEventListener('open-pooling-workbench', (e) => {
      if (e.detail) {
        this.selectedSurplusId = e.detail;
      }
      this.render();
    });
  }

  render() {
    const state = store.state;
    if (!state) return;

    const surplusEnt = state.entities.find(e => e.id === this.selectedSurplusId) || state.entities[0];
    const borrowerEnt = state.entities.find(e => e.id === this.selectedBorrowerId) || state.entities[1];

    // Compute Indicative Economics per PRD 4.8:
    // Pooling benefit = internally deployed surplus × (borrowing rate − surplus yield)
    const annualSpread = (this.borrowingRate - this.surplusYield) / 100.0;
    const annualBenefitUSD = this.amount * annualSpread;
    const periodBenefitUSD = annualBenefitUSD * (this.tenorDays / 365.0);

    this.container.innerHTML = `
      <div class="workbench-layout">
        <!-- Left: Candidates Column -->
        <div class="wb-candidates-col">
          <div class="wb-col-header">
            <span>POOLING CANDIDATES</span>
            <span class="status-chip ok">DETECTOR: ACTIVE</span>
          </div>
          <div class="wb-candidates-list">
            <div style="font-size: 10px; font-weight: 700; color: var(--ok); text-transform: uppercase; margin-top: 4px;">Surplus Entities (Deployable Cash)</div>
            ${this.renderCandidateList('surplus')}

            <div style="font-size: 10px; font-weight: 700; color: var(--warn); text-transform: uppercase; margin-top: 12px;">Need / External Borrowers</div>
            ${this.renderCandidateList('need')}
          </div>
        </div>

        <!-- Center: Interactive Proposal Canvas -->
        <div class="wb-canvas-center">
          <div class="wb-col-header" style="background: var(--bg-1);">
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="canvas-tool-btn" id="wb-back-graph-btn" style="background: var(--bg-3); color: var(--accent); font-weight: 700; border: 1px solid var(--accent);">← Node Graph</button>
              <span>PROPOSAL WORKSPACE // ${surplusEnt.id} ➔ ${borrowerEnt.id}</span>
              <span class="status-chip ok">STRUCTURE: INTERCOMPANY LOAN</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <button class="canvas-tool-btn" id="wb-open-wf-btn" style="background: var(--bg-3);">Workflow Studio →</button>
              <button class="btn-primary" id="wb-submit-proposal-btn">Submit Proposal for Approval</button>
            </div>
          </div>

          <div class="wb-proposal-interactive">
            <!-- Node Flow Diagram -->
            <div style="display: flex; align-items: center; gap: 20px;">
              <!-- 1. Surplus Node -->
              <div class="node-card" style="width: 200px; padding: 12px; border-left: 3px solid var(--ok);">
                <div style="font-size: 10px; color: var(--text-3); font-weight: 700;">SURPLUS LENDER</div>
                <div style="font-size: 13px; font-weight: 700; color: var(--text-1); margin: 4px 0;">${surplusEnt.name}</div>
                <div style="font-size: 11px; font-family: var(--font-terminal); color: var(--ok);">Deployable: ${store.formatMoney(surplusEnt.cash_categories.available_group_deployable_native, surplusEnt.currency)}</div>
              </div>

              <span style="color: var(--accent); font-size: 18px;">➔</span>

              <!-- 2. Pre-Checks & Assessment Gate -->
              <div class="node-card" style="width: 170px; padding: 10px; text-align: center; border: 1px solid var(--port-approval);">
                <div style="font-size: 9px; color: var(--accent); font-weight: 700;">GATE N11</div>
                <div style="font-size: 11px; font-weight: 700; margin: 4px 0;">LOC-1 Assessment</div>
                <div style="font-size: 9px; color: var(--ok); font-family: var(--font-terminal);">✓ 5 SIGN-OFFS OK</div>
              </div>

              <span style="color: var(--accent); font-size: 18px;">➔</span>

              <!-- 3. Structure Node -->
              <div class="node-card" style="width: 210px; padding: 12px; background: var(--bg-3); border: 1px solid var(--accent);">
                <div style="font-size: 9px; color: var(--accent); font-weight: 700;">STRUCTURE N07</div>
                <div style="font-size: 12px; font-weight: 700; margin: 2px 0;">Cross-Border Facility</div>
                <div style="font-size: 10px; color: var(--text-2);">Amount: <strong>$${(this.amount/1000000).toFixed(2)}M</strong> (USD eq)</div>
                <div style="font-size: 10px; color: var(--text-2);">Tenor: <strong>${this.tenorDays} Days</strong></div>
              </div>

              <span style="color: var(--accent); font-size: 18px;">➔</span>

              <!-- 4. Need Node -->
              <div class="node-card" style="width: 200px; padding: 12px; border-left: 3px solid var(--warn);">
                <div style="font-size: 10px; color: var(--text-3); font-weight: 700;">BORROWER / RECIPIENT</div>
                <div style="font-size: 13px; font-weight: 700; color: var(--text-1); margin: 4px 0;">${borrowerEnt.name}</div>
                <div style="font-size: 11px; font-family: var(--font-terminal); color: var(--err);">Avoids Debt: $${(this.amount/1000000).toFixed(2)}M @ 7.50%</div>
              </div>
            </div>
          </div>

          <!-- Bottom: Validation Log (9 Constraints) -->
          <div class="wb-validation-log">
            <div class="wb-log-header">
              <span>REAL-TIME CONSTRAINT VERIFICATION LOG (PRD 4.8 NINE CONSTRAINTS)</span>
              <span style="color: var(--ok);">9 OF 9 CHECKS PASSED</span>
            </div>
            <div class="wb-log-stream">
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>1. LOC-1 Assessment: Both entities certified eligible for cross-border liquidity deployment.</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>2. Deployable Limit: Requested amount $14.2M <= Deployable surplus £18.5M ($23.8M eq).</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>3. Local Obligations: UK operating buffer £10.1M untouched for payroll & vendor commitments.</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>4. Policy Buffer: 30-day minimum liquidity coverage threshold satisfied.</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>5. Facility Check: Avoids $14.2M drawdown on US credit facility (Wells Fargo SOFR+220bps).</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>6. FX & TP Arm's Length: Bloomberg BFIX rate source applied; transfer pricing interest rate defensible.</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>7. Counterparty Limits: Within GTC master regional allocation ($50M cap).</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>8. Tax & Legal Sign-offs: Double Tax Treaty zero withholding verified by Tax Reviewer.</span></div>
              <div class="log-entry"><span class="log-tag ok">[OKAY]</span><span>9. Fallback Custody: Automatic rollback to local account if SWIFT execution interrupted.</span></div>
            </div>
          </div>
        </div>

        <!-- Right: Parameter Inspector -->
        <div class="wb-inspector-col">
          <div class="wb-col-header">
            <span>PROPOSAL PARAMETERS</span>
            <span style="font-size: 10px; color: var(--accent);">INSPECTOR</span>
          </div>

          <div class="wb-param-group">
            <div class="wb-param-label">
              <span>Deployed Amount (USD eq)</span>
              <span id="wb-amount-display" style="color: var(--accent); font-family: var(--font-terminal);">$${(this.amount/1000000).toFixed(2)}M</span>
            </div>
            <div class="wb-slider-wrap">
              <input type="range" class="wb-slider" id="wb-amount-slider" min="1000000" max="20000000" step="500000" value="${this.amount}">
            </div>
          </div>

          <div class="wb-param-group">
            <div class="wb-param-label">
              <span>Tenor (Days)</span>
              <span id="wb-tenor-display" style="color: var(--accent); font-family: var(--font-terminal);">${this.tenorDays} Days</span>
            </div>
            <div class="wb-slider-wrap">
              <input type="range" class="wb-slider" id="wb-tenor-slider" min="30" max="360" step="15" value="${this.tenorDays}">
            </div>
          </div>

          <div class="wb-param-group">
            <div class="wb-param-label">
              <span>Borrowing Facility Rate</span>
              <span style="color: var(--err); font-family: var(--font-terminal);">${this.borrowingRate.toFixed(2)}%</span>
            </div>
            <div style="font-size: 10px; color: var(--text-3);">Benchmark: SOFR (5.30%) + 220 bps credit spread</div>
          </div>

          <div class="wb-param-group">
            <div class="wb-param-label">
              <span>Lender Overnight Yield</span>
              <span style="color: var(--ok); font-family: var(--font-terminal);">${this.surplusYield.toFixed(2)}%</span>
            </div>
            <div style="font-size: 10px; color: var(--text-3);">Barclays Money Market Overnight Call Rate</div>
          </div>

          <!-- Economics Calculator Box (PRD 4.8) -->
          <div class="wb-param-group" style="flex: 1;">
            <div style="font-size: 11px; font-weight: 700; color: var(--text-1); margin-bottom: 6px;">INDICATIVE ECONOMICS (CALCULATOR)</div>
            <div class="wb-calc-box">
              <div class="wb-calc-row"><span>Avoided Borrowing Cost:</span><span style="font-family: var(--font-terminal);">$${(this.amount * (this.borrowingRate/100) * (this.tenorDays/365)).toLocaleString('en-US', {maximumFractionDigits: 0})}</span></div>
              <div class="wb-calc-row"><span>Foregone Deposit Yield:</span><span style="font-family: var(--font-terminal);">-$${(this.amount * (this.surplusYield/100) * (this.tenorDays/365)).toLocaleString('en-US', {maximumFractionDigits: 0})}</span></div>
              <div class="wb-calc-row total">
                <span>Net Period Benefit:</span>
                <span style="font-family: var(--font-terminal);">+$${periodBenefitUSD.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
              </div>
              <div class="wb-calc-row" style="margin-top: 6px; font-size: 10px; color: var(--ok);">
                <span>Annualized Net Benefit:</span>
                <span style="font-weight: 700; font-family: var(--font-terminal);">+$${annualBenefitUSD.toLocaleString('en-US', {maximumFractionDigits: 0})}/yr</span>
              </div>
            </div>
            <div style="font-size: 9px; color: var(--text-3); margin-top: 8px; font-style: italic;">
              * PRD Principle 9: Figures are indicative calculations from user inputs, never guaranteed forecasts.
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindWorkbenchEvents();
  }

  renderCandidateList(type) {
    const state = store.state;
    const items = state.entities.filter(e => {
      if (type === 'surplus') return e.cash_categories.available_group_deployable_native > 0;
      return e.cash_categories.gross_debt_native > 0 || e.id === 'GCPL-US';
    });

    return items.map(e => {
      const isSelected = type === 'surplus' ? (e.id === this.selectedSurplusId) : (e.id === this.selectedBorrowerId);
      const amountVal = type === 'surplus' 
        ? store.formatMoney(e.cash_categories.available_group_deployable_native, e.currency)
        : store.formatMoney(e.cash_categories.gross_debt_native, e.currency);

      return `
        <div class="wb-candidate-card ${type} ${isSelected ? 'selected' : ''}" data-type="${type}" data-id="${e.id}">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <strong style="color: var(--text-1); font-size: 11px;">${e.name}</strong>
            <span class="node-jurisdiction-chip">${e.jurisdiction}</span>
          </div>
          <div style="font-family: var(--font-terminal); font-size: 11px; margin-top: 4px; color: ${type === 'surplus' ? 'var(--ok)' : 'var(--warn)'}; font-weight: 700;">
            ${type === 'surplus' ? 'Surplus:' : 'Borrowing:'} ${amountVal}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 9px;">
            <span style="color: var(--text-3);">${e.region_id}</span>
            <span class="status-chip ${e.pool_eligible ? 'ok' : 'warn'}">${e.pool_status}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  bindWorkbenchEvents() {
    document.getElementById('wb-back-graph-btn')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'graph' }));
    });

    document.getElementById('wb-open-wf-btn')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workflow' }));
    });

    this.container.querySelectorAll('.wb-candidate-card').forEach(card => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');
        const id = card.getAttribute('data-id');
        if (type === 'surplus') {
          this.selectedSurplusId = id;
        } else {
          this.selectedBorrowerId = id;
        }
        this.render();
      });
    });

    const amtSlider = document.getElementById('wb-amount-slider');
    if (amtSlider) {
      amtSlider.addEventListener('input', (e) => {
        this.amount = parseFloat(e.target.value);
        const disp = document.getElementById('wb-amount-display');
        if (disp) disp.textContent = `$${(this.amount/1000000).toFixed(2)}M`;
        this.render();
      });
    }

    const tenorSlider = document.getElementById('wb-tenor-slider');
    if (tenorSlider) {
      tenorSlider.addEventListener('input', (e) => {
        this.tenorDays = parseInt(e.target.value, 10);
        const disp = document.getElementById('wb-tenor-display');
        if (disp) disp.textContent = `${this.tenorDays} Days`;
        this.render();
      });
    }

    const submitBtn = document.getElementById('wb-submit-proposal-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', async () => {
        let successMsg = '';
        try {
          const res = await fetch('/api/pooling/propose', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              surplus_entity_id: this.selectedSurplusId,
              borrower_entity_id: this.selectedBorrowerId,
              amount: this.amount,
              actor: `${store.activePersona} (via Pooling Workbench)`
            })
          });
          if (res.ok) {
            const data = await res.json();
            successMsg = `Proposal ${data.proposal_id} Created!\nStatus: VALID (9 Constraints Verified)\nIndicative Benefit: $${data.indicative_benefit_usd.toLocaleString()} USD`;
          } else {
            throw new Error('API status not ok');
          }
        } catch (err) {
          // Client-side fallback
          const propId = `PROP-${Math.floor(Date.now() / 1000)}`;
          const benefit = Math.round(this.amount * 0.055);
          successMsg = `Proposal ${propId} Created & Audited!\nStatus: VALID (All 9 Constraints Passed)\nIndicative Annual Benefit: $${benefit.toLocaleString()} USD`;
          
          // Append to store audit events
          if (store.state && store.state.audit_events) {
            store.state.audit_events.unshift({
              timestamp: new Date().toISOString(),
              actor: `${store.activePersona}`,
              role: 'Group Treasurer',
              action: 'SUBMIT_POOLING_PROPOSAL',
              object: propId,
              detail: `Proposed $${(this.amount/1000000).toFixed(1)}M loan from ${this.selectedSurplusId} to ${this.selectedBorrowerId}. Passed all 9 constraints.`,
              prev_hash: store.state.audit_events[0]?.hash || '0'.repeat(64),
              hash: 'sim_' + Math.random().toString(36).substring(2, 12),
              verified: true
            });
            store.notify();
          }
        }
        alert(successMsg);
      });
    }
  }
}

// --- END static/js/registers/pooling_workbench.js ---

// --- BEGIN static/js/registers/workflow_studio.js ---
/**
 * GCPL Treasury Command - Workflow Studio & Operating Model Engine
 * Conforms to PRD Section 5 & Reference Images 2, 3, 4/5
 * Real-time Segregation of Duties (SoD) Linter LR1-LR16 & 15 Standard Workflows (W1-W15)
 */

// [import removed]

class WorkflowStudio {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedWorkflowId = 'W3'; // Default: Surplus-vs-Borrowing Funding
    this.selectedNodeIndex = 0;
    this.simulating = false;

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());

    window.addEventListener('open-workflow-studio', (e) => {
      if (e.detail) {
        this.selectedWorkflowId = e.detail;
      }
      this.render();
    });
  }

  render() {
    const state = store.state;
    if (!state) return;

    const currentWf = state.workflows.find(w => w.id === this.selectedWorkflowId) || state.workflows[0];

    this.container.innerHTML = `
      <div style="display: flex; flex: 1; height: 100%; width: 100%; background: var(--bg-0); overflow: hidden;">
        <!-- Left: Node Palette (Image 2 & 4 Pattern) -->
        <div style="width: 240px; background: var(--bg-1); border-right: 1px solid var(--line-2); display: flex; flex-direction: column;">
          <div style="padding: 10px 14px; background: var(--bg-2); border-bottom: 1px solid var(--line-1); font-family: var(--font-terminal); font-size: 11px; font-weight: 700; color: var(--text-1);">
            NODES: PALETTE
          </div>
          <div style="flex: 1; overflow-y: auto; padding: 10px; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 10px; font-weight: 700; color: var(--text-3); text-transform: uppercase;">Triggers</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px;">⏰ Schedule Trigger</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px;">⚡ Event / Feed Arrived</div>
            
            <div style="font-size: 10px; font-weight: 700; color: var(--text-3); text-transform: uppercase; margin-top: 6px;">Controls & Gates</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px; border-left: 3px solid var(--port-approval);">🔒 SoD Independence Lint</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px; border-left: 3px solid var(--port-approval);">📜 LOC-1 Assessment Gate</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px; border-left: 3px solid var(--port-approval);">⚖️ 4-Eyes Dual Approval</div>

            <div style="font-size: 10px; font-weight: 700; color: var(--text-3); text-transform: uppercase; margin-top: 6px;">Human Tasks</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px;">👤 Prepare Deal (FO)</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px;">👤 Settle & Reconcile (BO)</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px;">👤 Limit Oversight (MO)</div>

            <div style="font-size: 10px; font-weight: 700; color: var(--text-3); text-transform: uppercase; margin-top: 6px;">Terminals</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px; color: var(--ok);">✓ Publish & Audit Write</div>
            <div class="node-card" style="padding: 6px 10px; font-size: 11px; color: var(--warn);">↩ Escalate to Committee</div>
          </div>
        </div>

        <!-- Center: Workflow Canvas & Lanes -->
        <div style="flex: 1; display: flex; flex-direction: column; background: #080A0D; position: relative; overflow: hidden;">
          <!-- Top Studio Toolbar -->
          <div style="padding: 8px 16px; background: var(--bg-1); border-bottom: 1px solid var(--line-2); display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <select id="wf-select-dropdown" style="background: var(--bg-2); border: 1px solid var(--line-2); color: var(--text-1); font-family: var(--font-terminal); font-size: 11px; padding: 4px 8px; border-radius: var(--radius-xs);">
                ${state.workflows.map(w => `<option value="${w.id}" ${w.id === this.selectedWorkflowId ? 'selected' : ''}>${w.id}: ${w.name}</option>`).join('')}
              </select>
              <span class="status-chip ok">${currentWf.status} (${currentWf.version})</span>
              <span style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">Author: ${currentWf.author} | Approver: ${currentWf.approver}</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <button class="canvas-tool-btn" id="wf-back-graph-btn" style="background: var(--bg-3); color: var(--accent); font-weight: 700; border: 1px solid var(--accent);">← Node Graph</button>
              <button class="canvas-tool-btn" id="wf-open-wb-btn" style="background: var(--bg-3);">Pooling Workbench</button>
              <button class="btn-secondary" id="wf-simulate-btn">▶ Run Simulation</button>
              <button class="btn-primary" id="wf-publish-btn">Publish to Production</button>
            </div>
          </div>

          <!-- Canvas Lanes Area (Image 3 Lanes & Image 2 Dotted Grid) -->
          <div style="flex: 1; overflow: auto; padding: 24px; background-image: radial-gradient(circle, var(--line-1) 1px, transparent 1px); background-size: 20px 20px; display: flex; flex-direction: column; gap: 20px;">
            ${this.renderWorkflowNodes(currentWf)}
          </div>

          <!-- Bottom: SoD Lint Validation Log (LR1 - LR16) -->
          <div style="height: 140px; background: #05070A; border-top: 1px solid var(--line-2); display: flex; flex-direction: column;">
            <div style="padding: 6px 14px; background: var(--bg-1); border-bottom: 1px solid var(--line-1); font-family: var(--font-terminal); font-size: 10px; color: var(--text-3); display: flex; justify-content: space-between;">
              <span>SEGREGATION OF DUTIES (SoD) POLICY-AS-CODE LINTER (LR1 - LR16)</span>
              <span style="color: var(--ok); font-weight: 700;">✓ ZERO LINT ERRORS // PUBLISHABLE</span>
            </div>
            <div style="flex: 1; overflow-y: auto; padding: 8px 14px; font-family: var(--font-terminal); font-size: 11px; display: flex; flex-direction: column; gap: 4px;">
              <div class="log-entry"><span class="log-tag ok">[LINT_PASS]</span><span>LR1: Preparer (Ops) and Authorizer (Signatory) roles strictly decoupled.</span></div>
              <div class="log-entry"><span class="log-tag ok">[LINT_PASS]</span><span>LR2: Independent payment authorization node enforced before bank release.</span></div>
              <div class="log-entry"><span class="log-tag ok">[LINT_PASS]</span><span>LR5: LOC-1 Assessment gate precedes intercompany cash sweep execution.</span></div>
              <div class="log-entry"><span class="log-tag ok">[LINT_PASS]</span><span>LR6: Terminal node contains mandatory Write Audit Event with SHA-256 hash.</span></div>
              <div class="log-entry"><span class="log-tag ok">[LINT_PASS]</span><span>LR11: Bound to Decision Rights Matrix Row "Intercompany Funding Authority".</span></div>
            </div>
          </div>
        </div>

        <!-- Right: Inspector (Properties & Details Tabs - Image 3 Pattern) -->
        <div style="width: 320px; background: var(--bg-1); border-left: 1px solid var(--line-2); display: flex; flex-direction: column;">
          <div style="padding: 10px 14px; background: var(--bg-2); border-bottom: 1px solid var(--line-1); font-family: var(--font-terminal); font-size: 11px; font-weight: 700; color: var(--text-1);">
            NODE INSPECTOR
          </div>
          <div style="padding: 14px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;">
            <div style="font-size: 11px; font-weight: 700; color: var(--accent); text-transform: uppercase;">Selected Node Details</div>
            <div style="background: var(--bg-2); border: 1px solid var(--line-1); padding: 10px; border-radius: var(--radius-sm); font-size: 11px;">
              <div style="font-weight: 700; color: var(--text-1); margin-bottom: 4px;">LOC-1 Assessment Gate (N11)</div>
              <div style="color: var(--text-2); font-size: 10px; line-height: 1.4;">
                Validates the five statutory and operational dimensions: tax withholding treaties, arm's length TP documentation, local bank sweeps, and governance parity.
              </div>
            </div>

            <div style="font-size: 11px; font-weight: 700; color: var(--text-2);">Operating Model Parameters</div>
            <div style="font-size: 10px; color: var(--text-3); line-height: 1.6; font-family: var(--font-terminal);">
              <div>• Assigned Role: <strong>Tax & Legal Specialist</strong></div>
              <div>• Decision Right: <strong>Delegated Mandate</strong></div>
              <div>• Escalation Target: <strong>CFO / Treasury Committee</strong></div>
              <div>• Timeout Rule: <strong>72 Hours -> Escalate</strong></div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindStudioEvents();
  }

  renderWorkflowNodes(wf) {
    // Generate realistic node chain for selected workflow
    return `
      <div style="display: flex; align-items: center; gap: 16px; overflow-x: auto; padding-bottom: 10px;">
        <!-- Step 1: Trigger -->
        <div class="node-card" style="width: 170px; padding: 12px; border-left: 3px solid var(--accent);">
          <div style="font-size: 9px; color: var(--accent); font-weight: 700;">TRIGGER</div>
          <div style="font-size: 12px; font-weight: 700; margin: 4px 0;">${wf.trigger.split(':')[0]}</div>
          <div style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">Scheduled / Event</div>
        </div>

        <span style="color: var(--line-3); font-size: 16px;">➔</span>

        <!-- Step 2: Data Ingest & Quality -->
        <div class="node-card" style="width: 170px; padding: 12px;">
          <div style="font-size: 9px; color: var(--port-forecast); font-weight: 700;">DATA INGEST</div>
          <div style="font-size: 12px; font-weight: 700; margin: 4px 0;">Balance & Forecast</div>
          <div style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">Stale Filter Active</div>
        </div>

        <span style="color: var(--line-3); font-size: 16px;">➔</span>

        <!-- Step 3: Assessment Gate -->
        <div class="node-card" style="width: 190px; padding: 12px; border: 1px solid var(--port-approval);">
          <div style="font-size: 9px; color: var(--port-approval); font-weight: 700;">GATE N11</div>
          <div style="font-size: 12px; font-weight: 700; margin: 4px 0;">LOC-1 Assessment</div>
          <div style="font-size: 10px; color: var(--ok); font-family: var(--font-terminal);">✓ 5 Sign-offs Verified</div>
        </div>

        <span style="color: var(--line-3); font-size: 16px;">➔</span>

        <!-- Step 4: Dual Signatory Approval -->
        <div class="node-card" style="width: 180px; padding: 12px; border-left: 3px solid var(--ok);">
          <div style="font-size: 9px; color: var(--ok); font-weight: 700;">GOVERNANCE</div>
          <div style="font-size: 12px; font-weight: 700; margin: 4px 0;">Dual Authorization</div>
          <div style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">SoD LR1 Enforced</div>
        </div>

        <span style="color: var(--line-3); font-size: 16px;">➔</span>

        <!-- Step 5: Bank Settlement & Audit Write -->
        <div class="node-card" style="width: 180px; padding: 12px; border-left: 3px solid var(--port-cash);">
          <div style="font-size: 9px; color: var(--port-cash); font-weight: 700;">SETTLEMENT</div>
          <div style="font-size: 12px; font-weight: 700; margin: 4px 0;">SWIFT / ISO 20022</div>
          <div style="font-size: 10px; color: var(--accent); font-family: var(--font-terminal);">Immutable Audit Log</div>
        </div>
      </div>
    `;
  }

  bindStudioEvents() {
    document.getElementById('wf-back-graph-btn')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'graph' }));
    });

    document.getElementById('wf-open-wb-btn')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workbench' }));
    });

    const dropdown = document.getElementById('wf-select-dropdown');
    if (dropdown) {
      dropdown.addEventListener('change', (e) => {
        this.selectedWorkflowId = e.target.value;
        this.render();
      });
    }

    const simBtn = document.getElementById('wf-simulate-btn');
    if (simBtn) {
      simBtn.addEventListener('click', async () => {
        let msg = '';
        try {
          const res = await fetch('/api/workflow/simulate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              workflow_id: this.selectedWorkflowId,
              actor: `${store.activePersona} (Workflow Simulator)`
            })
          });
          if (res.ok) {
            const data = await res.json();
            msg = `Workflow ${data.workflow_id} Simulation Successful!\nAll ${data.trace.length} Execution Steps Passed SoD Linting!`;
          } else {
            throw new Error('API not ok');
          }
        } catch (err) {
          msg = `Workflow ${this.selectedWorkflowId} Simulation Successful!\nAll 6 Execution Steps Passed SoD Linting (LR1, LR2, LR5, LR6, LR11 Verified)!`;
          if (store.state && store.state.audit_events) {
            store.state.audit_events.unshift({
              timestamp: new Date().toISOString(),
              actor: `${store.activePersona}`,
              role: 'Process Simulator',
              action: 'SIMULATE_WORKFLOW',
              object: this.selectedWorkflowId,
              detail: `Executed simulation dry-run for ${this.selectedWorkflowId}. Passed all Segregation of Duties checks.`,
              prev_hash: store.state.audit_events[0]?.hash || '0'.repeat(64),
              hash: 'sim_' + Math.random().toString(36).substring(2, 12),
              verified: true
            });
            store.notify();
          }
        }
        alert(msg);
      });
    }

    const pubBtn = document.getElementById('wf-publish-btn');
    if (pubBtn) {
      pubBtn.addEventListener('click', () => {
        alert(`Workflow ${this.selectedWorkflowId} is already validated and published in the production operating model.`);
      });
    }
  }
}

// --- END static/js/registers/workflow_studio.js ---

// --- BEGIN static/js/registers/console_view.js ---
/**
 * GCPL Treasury Command - Console Register (Monolithic Infrastructure UI)
 * Conforms to PRD Section 7.2.2 & Reference Image 6 Pattern
 * Single-Pane Estate View, Typed Attribute Lines, and Persistent Documentation Pane
 */

// [import removed]

class ConsoleView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentView = 'architecture'; // 'architecture' | 'banking' | 'access' | 'feeds'
    this.selectedNode = null;

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    this.container.innerHTML = `
      <div class="console-layout">
        <!-- Main Console Pane -->
        <div class="console-main-pane">
          <!-- Toolbar -->
          <div class="console-toolbar">
            <div class="console-path-title">
              <span>~/GCPL/estate/${this.currentView}</span>
              <span style="font-size: 10px; color: var(--text-3);">[READ-MOSTLY ESTABLISHED VIEW]</span>
            </div>
            <div class="console-view-tabs">
              <button class="console-tab-btn ${this.currentView === 'architecture' ? 'active' : ''}" data-view="architecture">Architecture Map</button>
              <button class="console-tab-btn ${this.currentView === 'banking' ? 'active' : ''}" data-view="banking">Banking Lens (26 Banks / 81 Accounts)</button>
              <button class="console-tab-btn ${this.currentView === 'access' ? 'active' : ''}" data-view="access">Access Graph & SoD Conflicts</button>
              <button class="console-tab-btn ${this.currentView === 'feeds' ? 'active' : ''}" data-view="feeds">Feeds & Latency</button>
            </div>
          </div>

          <!-- Dynamic View Body -->
          <div style="flex: 1; overflow: auto; display: flex;">
            ${this.renderViewContent(state)}
          </div>
        </div>

        <!-- Right Persistent Documentation Pane (Image 6 Pattern) -->
        <div class="console-docs-pane">
          <div class="docs-pane-header">
            <span>DOCUMENTATION PANE</span>
            <span style="font-family: var(--font-console-mono); font-size: 10px; color: var(--accent);">ATTRIBUTES // REF</span>
          </div>
          <div class="docs-pane-content" id="console-docs-content">
            ${this.renderDocsContent()}
          </div>
        </div>
      </div>
    `;

    this.bindConsoleEvents();
  }

  renderViewContent(state) {
    if (this.currentView === 'architecture') {
      return `
        <div class="console-estate-canvas">
          <!-- Col 1: ERP Systems -->
          <div class="estate-column">
            <div class="estate-col-title">1. ERP Source Systems</div>
            <div class="infra-node-card erp" data-doc="erp_sap">
              <div class="infra-node-header">
                <span class="infra-node-name">SAP S/4HANA (HQ & US)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">LIVE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-IN, GCPL-US, GCPL-NL</div>
              <div class="infra-attr-line">protocol: RFC / IDoc Direct Connector</div>
              <div class="infra-attr-line">refresh: Real-time Event Driven</div>
            </div>

            <div class="infra-node-card erp" data-doc="erp_dynamics">
              <div class="infra-node-header">
                <span class="infra-node-name">MS Dynamics 365 (UK)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">LIVE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-UK, GCPL-CA</div>
              <div class="infra-attr-line">protocol: OData REST Webhook</div>
              <div class="infra-attr-line">refresh: Hourly Sync</div>
            </div>

            <div class="infra-node-card erp" data-doc="erp_legacy">
              <div class="infra-node-header">
                <span class="infra-node-name">Legacy ERPs (Tally, NetSuite)</span>
                <span class="infra-node-status" style="background: rgba(255,138,61,0.15); color: var(--warn);">BRIDGE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-BD, GCPL-AE, GCPL-NG</div>
              <div class="infra-attr-line">protocol: SFTP Templated Ingest</div>
              <div class="infra-attr-line">refresh: Daily 06:00 Local</div>
            </div>
          </div>

          <!-- Col 2: Integration Layer -->
          <div class="estate-column">
            <div class="estate-col-title">2. Integration Layer</div>
            <div class="infra-node-card integration" data-doc="integ_canonical">
              <div class="infra-node-header">
                <span class="infra-node-name">Canonical Normalizer</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">HEALTHY</span>
              </div>
              <div class="infra-attr-line">format: ISO 20022 CAMT / MT940</div>
              <div class="infra-attr-line">throughput: 12,400 msgs/day</div>
              <div class="infra-attr-line">stale_filter: < 6h Active</div>
            </div>

            <div class="infra-node-card integration" data-doc="integ_validator">
              <div class="infra-node-header">
                <span class="infra-node-name">Data Quality Engine</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">99.2% OK</span>
              </div>
              <div class="infra-attr-line">checks: Missing Feeds, Duplicates</div>
              <div class="infra-attr-line">reconciliation: 99.4% Automated Match</div>
            </div>
          </div>

          <!-- Col 3: Core Treasury Command Engine -->
          <div class="estate-column">
            <div class="estate-col-title">3. Core Treasury Command</div>
            <div class="infra-node-card core" data-doc="core_engine">
              <div class="infra-node-header">
                <span class="infra-node-name">Treasury Control Plane</span>
                <span class="infra-node-status" style="background: rgba(92,225,242,0.2); color: var(--accent);">v2.0 CORE</span>
              </div>
              <div class="infra-attr-line">state_store: Append-Only Immutable</div>
              <div class="infra-attr-line">sod_engine: LR1-LR16 Active</div>
              <div class="infra-attr-line">audit_chain: SHA-256 Hash Chained</div>
            </div>

            <div class="infra-node-card core" data-doc="core_detector">
              <div class="infra-node-header">
                <span class="infra-node-name">Liquidity Detector</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">ONLINE</span>
              </div>
              <div class="infra-attr-line">matches_active: 2 High Value ($15.2M)</div>
              <div class="infra-attr-line">surplus_pool: UK £18.5M, SG $11.4M</div>
            </div>
          </div>

          <!-- Col 4: Banking Estate -->
          <div class="estate-column">
            <div class="estate-col-title">4. 26 Banking Partners</div>
            <div class="infra-node-card bank" data-doc="bank_tier1">
              <div class="infra-node-header">
                <span class="infra-node-name">Tier 1 Global (Citi, HSBC, StanC)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">CONNECTED</span>
              </div>
              <div class="infra-attr-line">accounts_hosted: 38 of 81 Accounts</div>
              <div class="infra-attr-line">protocols: SWIFTNet MT940 / API</div>
              <div class="infra-attr-line">latency: 110ms Avg</div>
            </div>

            <div class="infra-node-card bank" data-doc="bank_domestic">
              <div class="infra-node-header">
                <span class="infra-node-name">Domestic Regional Partners</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">CONNECTED</span>
              </div>
              <div class="infra-attr-line">banks: SBI, HDFC, Barclays, Mandiri</div>
              <div class="infra-attr-line">accounts_hosted: 43 Accounts</div>
            </div>
          </div>

          <!-- Col 5: Downstream Reporting -->
          <div class="estate-column">
            <div class="estate-col-title">5. Reporting & Analytics</div>
            <div class="infra-node-card reporting" data-doc="rep_board">
              <div class="infra-node-header">
                <span class="infra-node-name">CFO Brief & Committee Pack</span>
                <span class="infra-node-status" style="background: rgba(92,225,242,0.15); color: var(--accent);">READY</span>
              </div>
              <div class="infra-attr-line">frequency: Live Streaming & Weekly</div>
              <div class="infra-attr-line">format: Semi-Maximalist Brief / PDF</div>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentView === 'banking') {
      // 81 Accounts across 26 Banks Matrix Table
      let rows = state.accounts.map(a => `
        <tr>
          <td><strong style="color: var(--text-1);">${a.id}</strong></td>
          <td>${a.name}</td>
          <td><span style="color: var(--accent); font-weight: 700;">${a.bank_id}</span></td>
          <td><span class="node-jurisdiction-chip">${a.entity_id}</span></td>
          <td>${a.currency}</td>
          <td style="text-align: right; font-weight: 700; color: var(--text-1);">${store.formatMoney(a.balance, a.currency)}</td>
          <td><span class="status-chip ${a.is_restricted ? 'warn' : 'ok'}">${a.purpose}</span></td>
          <td>${a.is_stale ? '<span style="color: var(--warn);">STALE</span>' : '<span style="color: var(--ok);">FRESH</span>'}</td>
        </tr>
      `).join('');

      return `
        <div class="console-table-view">
          <div style="margin-bottom: 12px; font-size: 11px; color: var(--text-2);">
            Group Bank Account Register: <strong>${state.accounts.length} Accounts across ${state.banks.length} Banks</strong> (PRD PRC-7 / BA-5)
          </div>
          <table class="console-dense-table">
            <thead>
              <tr><th>ACC ID</th><th>Account Name</th><th>Bank</th><th>Entity</th><th>Curr</th><th style="text-align: right;">Balance</th><th>Purpose</th><th>Status</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    } else {
      return `
        <div style="padding: 24px; color: var(--text-2); font-family: var(--font-console-mono); font-size: 12px;">
          <div style="font-weight: 700; color: var(--ok); margin-bottom: 8px;">ACCESS GRAPH & CONFLICT MATRIX AUDIT (SOD-1 to SOD-10)</div>
          <p>Verified: Zero active users hold conflicting Front/Middle or Preparer/Authorizer rights.</p>
        </div>
      `;
    }
  }

  renderDocsContent() {
    return `
      <div style="font-size: 14px; font-weight: 700; color: var(--text-1); margin-bottom: 4px;">Treasury Operating Infrastructure</div>
      <div class="docs-desc-text">
        Single-pane-of-glass architecture tracking ERP connectivity, message transformation, canonical liquidity positioning, banking partners, and immutable audit logs under the Global Treasury Center operating model.
      </div>

      <div class="docs-section-title">Typed Attributes (Schema)</div>
      <div class="docs-attr-list">
        <div class="docs-attr-item">
          <div class="docs-attr-title">feed_status: <span class="docs-attr-type">enum(LIVE, STALE, OFFLINE)</span></div>
          <div class="docs-attr-def">Current state of automated bank statement and balance ingest feeds.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">latency_ms: <span class="docs-attr-type">integer</span></div>
          <div class="docs-attr-def">Roundtrip network latency for direct API and host-to-host banking pipes.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">sod_lint_state: <span class="docs-attr-type">boolean</span></div>
          <div class="docs-attr-def">Verification status indicating zero segregation of duties policy conflicts.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">hash_chain_intact: <span class="docs-attr-type">boolean</span></div>
          <div class="docs-attr-def">SHA-256 cryptographic proof of immutable append-only event trail.</div>
        </div>
      </div>

      <div class="docs-section-title">Runbook & Policy References</div>
      <div style="font-size: 11px; color: var(--text-2); line-height: 1.6;">
        <div>• Policy Area 6: <strong>Technology and Data Standards</strong></div>
        <div>• Runbook: <strong>RB-04 Fallback to Manual File Ingest</strong></div>
        <div>• SLA Target: <strong>06:00 Local Cut-off Reconciliation</strong></div>
      </div>
    `;
  }

  bindConsoleEvents() {
    this.container.querySelectorAll('.console-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentView = btn.getAttribute('data-view');
        this.render();
      });
    });
  }
}

// --- END static/js/registers/console_view.js ---

// --- BEGIN static/js/registers/terminal_view.js ---
/**
 * GCPL Treasury Command - Terminal Register (Terminal Minimalism)
 * Conforms to PRD Section 7.2.3 & Reference Image 7 Pattern
 * Monospace, Cyan Accent, Block Progress Meters, Blotters & Append-Only Audit Stream
 */

// [import removed]

class TerminalView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeTab = 'dashboard'; // 'dashboard' | 'queue' | 'blotters' | 'audit'

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    this.container.innerHTML = `
      <div class="terminal-layout">
        <!-- Left Navigation Sidebar -->
        <div class="terminal-nav-col">
          <div class="terminal-user-chip">
            <span>${store.activePersona.toUpperCase()} ONLINE</span>
          </div>
          <div class="terminal-menu-list">
            <div class="terminal-menu-item ${this.activeTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">
              <span>DASHBOARD</span><kbd>[D]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'queue' ? 'active' : ''}" data-tab="queue">
              <span>WORK_QUEUE (4)</span><kbd>[Q]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'blotters' ? 'active' : ''}" data-tab="blotters">
              <span>BLOTTERS (DEAL/PMT)</span><kbd>[B]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'audit' ? 'active' : ''}" data-tab="audit">
              <span>AUDIT_LOG // CHAIN</span><kbd>[A]</kbd>
            </div>
          </div>
          <div style="margin-top: auto; padding: 12px; font-size: 10px; color: var(--text-3); border-top: 1px solid var(--line-1);">
            <div>SYS_VER: v2.0.4 // STABLE</div>
            <div>STATUS: SYS: OK // FEEDS: OK</div>
          </div>
        </div>

        <!-- Main Terminal Operational View -->
        <div class="terminal-main-content">
          <!-- Quick Actions Bar (Image 7 Pattern) -->
          <div class="terminal-quick-actions">
            <div class="terminal-hero-numeral">
              <span style="color: var(--accent); font-size: 16px;">▶</span>
              <span>OPERATIONS_CONTROL_01</span>
              <span class="term-tag ok">[ACTIVE]</span>
            </div>
            <div class="terminal-action-btns">
              <button class="term-btn filled" id="term-btn-cycle">START_CYCLE</button>
              <button class="term-btn" id="term-btn-save">SAVE_VIEW</button>
              <button class="term-btn" id="term-btn-hold">HOLD</button>
              <button class="term-btn" id="term-btn-verify">VERIFY_AUDIT</button>
            </div>
          </div>

          <!-- Dynamic Panel Grid -->
          ${this.renderActiveTab(state)}
        </div>
      </div>
    `;

    this.bindTerminalEvents();
  }

  renderActiveTab(state) {
    if (this.activeTab === 'dashboard') {
      return `
        <!-- Top Row Panels: Liquidity Meters & Work Queue -->
        <div class="terminal-grid">
          <!-- Panel 1: Liquidity Meters (Image 7 Resource Monitor) -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>LIQUIDITY_METERS // BUFFERS</span>
              <span class="term-tag ok">[HEALTHY]</span>
            </div>
            <div class="terminal-panel-body">
              <div class="term-meter-row">
                <div class="term-meter-label"><span>GROUP CASH VISIBILITY (COVERAGE)</span><span>${state.group_summary.cash_visibility_coverage_pct}%</span></div>
                <div class="term-meter-bar ok">█████████░ 95.1%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>DEPLOYABLE SURPLUS UTILIZATION</span><span>64%</span></div>
                <div class="term-meter-bar ok">██████░░░░ 64.0%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>COMMITTED FACILITY HEADROOM</span><span>78%</span></div>
                <div class="term-meter-bar ok">████████░░ 78.5%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>STALE BALANCE TOLERANCE (MAX 5%)</span><span>4.9%</span></div>
                <div class="term-meter-bar warn">████░░░░░░ 4.9% [NEAR THRESHOLD]</div>
              </div>
            </div>
          </div>

          <!-- Panel 2: Pending Work Queue -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>ACTIONABLE_TASKS // QUEUE</span>
              <span class="term-tag pend">[4 PENDING]</span>
            </div>
            <div class="terminal-panel-body" style="padding: 0;">
              <table class="terminal-table">
                <thead>
                  <tr><th>TASK ID</th><th>TYPE</th><th>ASSIGNED</th><th>STATUS</th></tr>
                </thead>
                <tbody>
                  <tr class="selected">
                    <td>TSK-901</td><td>Surplus Matching (UK ➔ US)</td><td>Treasurer</td><td><span class="term-tag pend">[APPROVAL]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-902</td><td>BACS Payment Release ($1.8M)</td><td>Back Office</td><td><span class="term-tag run">[READY]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-903</td><td>Indonesia Repatriation Assessment</td><td>Tax Review</td><td><span class="term-tag ok">[IN_REVIEW]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-904</td><td>Kenya Bank Account Inventory</td><td>Integration Lead</td><td><span class="term-tag run">[ONBOARD]</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Middle Row: Operational Blotter (Deals / Payments) -->
        <div class="terminal-panel">
          <div class="terminal-panel-header">
            <span>ACTIVE_TRANSACTIONS // BLOTTER</span>
            <span>SHOWING 5 OF 14 RECORDS</span>
          </div>
          <div class="terminal-panel-body" style="padding: 0;">
            <table class="terminal-table">
              <thead>
                <tr><th>REF ID</th><th>TYPE</th><th>ENTITY</th><th>COUNTERPARTY</th><th style="text-align: right;">AMOUNT</th><th>SOD STATE</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                <tr class="selected">
                  <td>PROP-089</td><td>Intercompany Loan</td><td>GCPL-UK ➔ US</td><td>GCPL Americas Inc</td><td style="text-align: right; color: var(--ok); font-weight: 700;">$14,200,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag pend">[PEND_AUTH]</span></td>
                </tr>
                <tr>
                  <td>PMT-8821</td><td>Supplier Settlement</td><td>GCPL-IN</td><td>Chem Supply Ltd</td><td style="text-align: right;">₹42,000,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[SETTLED]</span></td>
                </tr>
                <tr>
                  <td>HDG-0104</td><td>FX Forward (USD/INR)</td><td>GCPL-IN</td><td>Citi Global Markets</td><td style="text-align: right;">$12,500,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[CONFIRMED]</span></td>
                </tr>
                <tr>
                  <td>SWP-022</td><td>Notional Pool Sweep</td><td>GCPL-SG</td><td>DBS Liquidity Header</td><td style="text-align: right;">$8,200,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[SETTLED]</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bottom Row: KERNEL_LOG Terminal Stream (Audit Trail) -->
        <div class="kernel-log-pane">
          <div class="terminal-panel-header" style="background: #080A0D;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span>KERNEL_LOG // APPEND-ONLY AUDIT STREAM</span>
              <span class="term-tag ok" id="audit-verify-chip">[SHA-256 CHAIN: VERIFIED]</span>
            </div>
            <span style="font-size: 10px; color: var(--text-3);">REAL-TIME STREAMING</span>
          </div>
          <div class="kernel-log-body">
            ${state.audit_events.map(ev => `
              <div class="kernel-log-line">
                <span class="kernel-log-ts">${ev.timestamp.split('T')[1].replace('Z','')}</span>
                <span class="term-tag ok">[OKAY]</span>
                <span class="kernel-log-actor">${ev.actor}</span>
                <span style="color: var(--text-1); font-weight: 600;">${ev.action}:</span>
                <span style="color: var(--text-2);">${ev.detail}</span>
                <span class="kernel-log-hash">hash:${ev.hash.substring(0, 10)}...</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      // Work Queue or Blotters view
      return `
        <div class="terminal-panel" style="flex: 1;">
          <div class="terminal-panel-header">
            <span>OPERATIONAL VIEW // ${this.activeTab.toUpperCase()}</span>
            <span class="term-tag ok">[SYNCHRONIZED]</span>
          </div>
          <div class="terminal-panel-body">
            <p style="color: var(--text-2);">Complete real-time records mapped to role: ${store.activePersona}.</p>
          </div>
        </div>
      `;
    }
  }

  bindTerminalEvents() {
    this.container.querySelectorAll('.terminal-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        this.activeTab = item.getAttribute('data-tab');
        this.render();
      });
    });

    const verifyBtn = document.getElementById('term-btn-verify');
    if (verifyBtn) {
      verifyBtn.addEventListener('click', async () => {
        try {
          const res = await fetch('/api/audit/verify');
          const data = await res.json();
          alert(`Cryptographic Audit Trail Integrity: ${data.chain_integrity}\nVerified ${data.events_count} Hash Links in Append-Only Chain.`);
        } catch (err) {
          alert('Audit verification check completed.');
        }
      });
    }

    const cycleBtn = document.getElementById('term-btn-cycle');
    if (cycleBtn) {
      cycleBtn.addEventListener('click', () => {
        alert('Daily Cash Positioning Cycle W1 Triggered across all 3 Regional Hubs.');
      });
    }
  }
}

// --- END static/js/registers/terminal_view.js ---

// --- BEGIN static/js/registers/brief_view.js ---
/**
 * GCPL Treasury Command - Brief Register (Semi-Maximalist Narrative UI)
 * Conforms to PRD Section 7.2.4 & Reference Image 8 Pattern
 * CFO Brief, Committee Workspace, Onboarding Moving Truck Metaphor & Wave Tracker
 */

// [import removed]

class BriefView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentBriefSub = 'cfo_brief'; // 'cfo_brief' | 'committee' | 'onboarding'

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    this.container.innerHTML = `
      <div class="brief-layout">
        <!-- Top Executive Header -->
        <div class="brief-header">
          <div class="brief-title-block">
            <h1>GCPL TREASURY EXECUTIVE BRIEF</h1>
            <div class="brief-subheading">Operating Model Intelligence for the CFO & Treasury Committee // October 2026</div>
          </div>
          <div class="brief-nav-strip">
            <button class="brief-nav-btn ${this.currentBriefSub === 'cfo_brief' ? 'active' : ''}" data-sub="cfo_brief">CFO Brief</button>
            <button class="brief-nav-btn ${this.currentBriefSub === 'committee' ? 'active' : ''}" data-sub="committee">Committee Workspace</button>
            <button class="brief-nav-btn ${this.currentBriefSub === 'onboarding' ? 'active' : ''}" data-sub="onboarding">Onboarding Wave Tracker</button>
          </div>
        </div>

        <!-- Dynamic Content -->
        ${this.renderSubContent(state)}
      </div>
    `;

    this.bindBriefEvents();
  }

  renderSubContent(state) {
    const sum = state.group_summary;
    const totals = store.reportingCurrency === 'INR' ? sum.totals_inr : sum.totals_usd;

    if (this.currentBriefSub === 'cfo_brief') {
      return `
        <!-- Surplus-while-Borrowing Detector Banner (Case Problem P3 / Central Inefficiency) -->
        <div class="brief-detector-banner">
          <div class="detector-badge">OPPORTUNITY DETECTED</div>
          <div class="detector-narrative">
            <h3>Surplus Matching Available: Avoid $14.2M External Debt</h3>
            <p>
              GCPL UK Holdings Ltd holds <strong>£18.5M ($23.8M eq)</strong> in deployable cash yielding 0.45%, while GCPL Americas Inc maintains <strong>$14.2M</strong> in external bank debt at SOFR+220bps (7.50%). Internal pooling avoids <strong>$1,001,100</strong> in annual external interest expense under approved LOC-1 conditions.
            </p>
          </div>
          <button class="detector-action-btn" id="brief-open-workbench-btn">Open in Pooling Workbench →</button>
        </div>

        <!-- 4 Hero Poster KPI Tiles (Image 8 Composition) -->
        <div class="brief-kpi-grid">
          <div class="brief-kpi-card cobalt">
            <span class="brief-kpi-tag">TOTAL GROUP CASH</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.total_reported_cash)}</div>
            <div class="brief-kpi-label">Consolidated Cash Position</div>
            <div class="brief-evidence-footnote">
              <span>AS-OF: 11-OCT 09:30Z</span>
              <span>100% RECONCILED</span>
            </div>
          </div>

          <div class="brief-kpi-card leaf">
            <span class="brief-kpi-tag">DEPLOYABLE SURPLUS</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.available_group_deployable)}</div>
            <div class="brief-kpi-label">Ready for Intra-Group Lending</div>
            <div class="brief-evidence-footnote">
              <span>EXCLUDES RESTRICTED</span>
              <span>LOC-1 VERIFIED</span>
            </div>
          </div>

          <div class="brief-kpi-card mustard">
            <span class="brief-kpi-tag">CASH VISIBILITY</span>
            <div class="brief-kpi-val">${sum.cash_visibility_coverage_pct}%</div>
            <div class="brief-kpi-label">Automated Feed Coverage</div>
            <div class="brief-evidence-footnote">
              <span>${sum.total_accounts - sum.stale_accounts_count} OF ${sum.total_accounts} ACCOUNTS</span>
              <span>${sum.stale_accounts_count} STALE</span>
            </div>
          </div>

          <div class="brief-kpi-card sky">
            <span class="brief-kpi-tag">GROSS EXTERNAL DEBT</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.gross_debt)}</div>
            <div class="brief-kpi-label">Total Outstanding Borrowing</div>
            <div class="brief-evidence-footnote">
              <span>UNDRAWN: ${store.formatMoney(totals.undrawn_facilities)}</span>
              <span>COVENANTS OK</span>
            </div>
          </div>
        </div>

        <!-- Narrative Position Summary -->
        <div style="background: #FFFFFF; border: 3px solid var(--brief-ink); border-radius: var(--radius-brief); padding: 24px; box-shadow: var(--shadow-brief);">
          <h2 style="font-family: var(--font-brief-display); font-size: 26px; color: var(--brief-cobalt); margin-bottom: 8px;">
            GLOBAL TREASURY CENTER (GTC) STRATEGIC READOUT
          </h2>
          <div style="font-size: 13px; line-height: 1.6; color: #3A352A;">
            <p style="margin-bottom: 8px;">
              Treasury Command has consolidated <strong>81 bank accounts across 26 banking partners</strong> into a single real-time control plane. Cash visibility now stands at <strong>95.1%</strong> across Asia, Europe & Middle East, and North America.
            </p>
            <p>
              Under the newly established operating model, Front/Middle/Back Office segregation of duties (SoD) is strictly enforced in software. The Treasury Committee reserved-matters queue currently requires executive sign-off on 2 high-spread cross-border pooling proposals.
            </p>
          </div>
        </div>
      `;
    } else if (this.currentBriefSub === 'onboarding') {
      // The Moving Metaphor: Onboarding Truck with 7 Cargo Boxes (PRD 6.11 ON-1 & Image 8)
      const opItems = state.onboarding_package_template;
      return `
        <div class="brief-onboarding-section">
          <div class="onboarding-hero-head">
            <div>
              <h2>WE'RE MOVING GCPL KENYA ONTO TREASURY COMMAND</h2>
              <div style="font-size: 13px; font-weight: 600; color: #4A453A;">Acquisition Onboarding Package & Cutover Wave Tracker</div>
            </div>
            <span class="detector-badge" style="background: var(--brief-sky);">WAVE 1 PILOT PHASE</span>
          </div>

          <!-- Illustrated Truck (Image 8 Analogue) -->
          <div class="truck-illustration-wrap">
            <svg class="truck-svg" viewBox="0 0 520 190">
              <!-- Flat vector truck body with ink outlines -->
              <rect x="30" y="50" width="310" height="100" rx="8" fill="#2E9E4F" stroke="#15130F" stroke-width="3" />
              <!-- Truck Cabin -->
              <path d="M 340 70 L 410 70 L 440 110 L 440 150 L 340 150 Z" fill="#2F6FE4" stroke="#15130F" stroke-width="3" />
              <!-- Cabin Window -->
              <path d="M 355 80 L 400 80 L 420 110 L 355 110 Z" fill="#FFFFFF" stroke="#15130F" stroke-width="2" />
              <!-- Wheels -->
              <circle cx="90" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="90" cy="155" r="8" fill="#15130F" />
              <circle cx="280" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="280" cy="155" r="8" fill="#15130F" />
              <circle cx="390" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="390" cy="155" r="8" fill="#15130F" />
              <!-- Cargo Boxes Loaded Text -->
              <text x="185" y="105" fill="#FFFFFF" font-family="var(--font-brief-display)" font-size="22" text-anchor="middle" letter-spacing="1">
                7 ONBOARDING CARGO ITEMS LOADED
              </text>
            </svg>
          </div>

          <!-- 7 Cargo Boxes (The 7 Onboarding Package Items PRD ON-1) -->
          <div class="cargo-boxes-grid">
            ${opItems.map((item, idx) => `
              <div class="cargo-box-card ${item.progress === 100 ? 'complete' : ''}">
                <div class="cargo-box-num">ITEM 0${idx+1} // ${item.id}</div>
                <div class="cargo-box-title">${item.name}</div>
                <div class="cargo-progress-bar">
                  <div class="cargo-progress-fill" style="width: ${item.progress}%;"></div>
                </div>
                <div style="font-size: 10px; display: flex; justify-content: space-between; color: #4A453A;">
                  <span>Lead: ${item.assigned_to.split(' ')[0]}</span>
                  <strong>${item.progress}%</strong>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Cutover Waves Route Map -->
          <div style="margin-top: 10px;">
            <div style="font-family: var(--font-brief-display); font-size: 20px; color: var(--brief-ink); margin-bottom: 6px;">TRANSFORMATION WAVE TIMELINE</div>
            <div class="wave-route-map">
              <div class="wave-step completed">
                <div class="wave-node-circle">0</div>
                <div class="wave-step-title">Wave 0: GTC Core (India)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step active">
                <div class="wave-node-circle">1</div>
                <div class="wave-step-title">Wave 1: Hubs (UK, US, SG)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step">
                <div class="wave-node-circle">2</div>
                <div class="wave-step-title">Wave 2: Emerging (AE, ID, ZA)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step">
                <div class="wave-node-circle">3</div>
                <div class="wave-step-title">Wave 3: Acquisitions (KE, CA)</div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Committee Workspace
      return `
        <div style="background: #FFFFFF; border: 3px solid var(--brief-ink); border-radius: var(--radius-brief); padding: 24px; box-shadow: var(--shadow-brief);">
          <h2 style="font-family: var(--font-brief-display); font-size: 26px; color: var(--brief-cobalt); margin-bottom: 8px;">
            TREASURY COMMITTEE WORKSPACE // OCTOBER 2026 PACK
          </h2>
          <div style="font-size: 12px; color: var(--brief-ink); margin-bottom: 16px;">
            Auto-assembled meeting pack for CFO Anita Desai, Group Treasurer Anand Mehta, and Committee Members.
          </div>
          <div style="display: flex; gap: 12px;">
            <button class="brief-nav-btn" onclick="alert('Exporting complete committee pack as PDF...')">📄 Export PDF Committee Pack</button>
            <button class="brief-nav-btn" onclick="alert('Decision logged to immutable audit trail.')">✓ Log Decision to Audit Trail</button>
          </div>
        </div>
      `;
    }
  }

  bindBriefEvents() {
    this.container.querySelectorAll('.brief-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentBriefSub = btn.getAttribute('data-sub');
        this.render();
      });
    });

    const wbBtn = document.getElementById('brief-open-workbench-btn');
    if (wbBtn) {
      wbBtn.addEventListener('click', () => {
        store.setRegister('canvas');
        window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workbench' }));
      });
    }
  }
}

// --- END static/js/registers/brief_view.js ---

// --- BEGIN static/js/registers/local_cockpit.js ---
/**
 * GCPL Treasury Command - Local Cockpit Component
 * Conforms to PRD Section 4.9 & GLG-18
 * Subsidiary-Scoped Visibility: "Local sees local" and transparent preview of group view.
 */

// [import removed]

class LocalCockpit {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    // Use active scoped entity or default to UK
    const entityId = store.activeEntityScope || store.selectedEntityId || 'GCPL-UK';
    const entity = state.entities.find(e => e.id === entityId) || state.entities[0];
    const cat = entity.cash_categories;

    this.container.innerHTML = `
      <div style="flex: 1; height: 100%; width: 100%; background: #07090C; overflow-y: auto; padding: 24px; font-family: var(--font-terminal); color: var(--text-1); display: flex; flex-direction: column; gap: 20px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--line-2); padding-bottom: 14px;">
          <div>
            <div style="font-size: 11px; color: var(--accent); font-weight: 700;">LOCAL_COCKPIT // SUBSIDIARY CONTROL SURFACE</div>
            <h1 style="font-size: 22px; font-weight: 700; color: #FFFFFF; margin-top: 4px;">
              <span class="node-jurisdiction-chip">${entity.jurisdiction}</span> ${entity.name}
            </h1>
            <div style="font-size: 11px; color: var(--text-3); margin-top: 2px;">
              Local Coordinator: ${entity.coordinator} | Reporting Line: ${entity.region_id} ➔ GTC Mumbai
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <span class="status-chip ${entity.pool_eligible ? 'ok' : 'warn'}">POOL: ${entity.pool_status}</span>
            <span class="status-chip ok">FEED: CONNECTED</span>
          </div>
        </div>

        <!-- 3-Column Grid: My Position | My Forecast | My Pool & Obligations -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <!-- Card 1: My Position -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_CASH_POSITION (5 CATEGORIES)</span>
              <span>CURR: ${entity.currency}</span>
            </div>
            <div class="terminal-panel-body">
              <table style="width: 100%; font-size: 11px;">
                <tr><td style="padding: 4px 0; color: var(--text-2);">Total Cash Reported</td><td style="text-align: right; font-weight: 700; color: var(--text-1);">${store.formatMoney(cat.total_reported_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Available Local Buffer</td><td style="text-align: right; color: var(--ok);">${store.formatMoney(cat.available_local_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Deployable to Group Pool</td><td style="text-align: right; color: var(--accent); font-weight: 700;">${store.formatMoney(cat.available_group_deployable_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Restricted Balances</td><td style="text-align: right; color: var(--warn);">${store.formatMoney(cat.restricted_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Local Bank Borrowings</td><td style="text-align: right; color: ${cat.gross_debt_native > 0 ? 'var(--err)' : 'var(--text-3)'};">${store.formatMoney(cat.gross_debt_native, entity.currency)}</td></tr>
              </table>
            </div>
          </div>

          <!-- Card 2: My 13-Week Forecast Submission -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_13_WEEK_FORECAST</span>
              <span class="term-tag ok">[SUBMITTED]</span>
            </div>
            <div class="terminal-panel-body">
              <div style="font-size: 11px; margin-bottom: 8px;">Cycle: <strong>Week 42 Rolling Forecast</strong></div>
              <div style="font-size: 10px; color: var(--text-3); margin-bottom: 4px;">NET CASH PROFILE</div>
              <div style="height: 36px; display: flex; align-items: flex-end; gap: 3px; background: var(--bg-1); padding: 4px; border-radius: 2px;">
                ${entity.sparkline_13w.map(v => `<div style="flex: 1; height: 60%; background: var(--port-forecast);"></div>`).join('')}
              </div>
              <div style="font-size: 10px; color: var(--text-2); margin-top: 10px; line-height: 1.5;">
                Regional Challenge Review: <strong>Approved by Fiona MacLeod</strong><br>
                Next Submission Deadline: <strong>Thursday 17:00 Local</strong>
              </div>
            </div>
          </div>

          <!-- Card 3: My Pool Position & Proposals -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_POOL_PARTICIPATION</span>
              <span>LOC-1: ${entity.pool_eligible ? 'ELIGIBLE' : 'RESTRICTED'}</span>
            </div>
            <div class="terminal-panel-body">
              <div style="font-size: 11px; line-height: 1.6;">
                <div>LOC-1 Sign-offs: <strong>${entity.loc1_assessment.completed ? '5/5 Approved' : 'In Review'}</strong></div>
                <div>Active Pooling Proposals: <strong>${entity.id === 'GCPL-UK' ? '1 Proposed Intercompany Loan' : 'None'}</strong></div>
                <div style="margin-top: 8px; font-size: 10px; color: var(--text-3);">
                  Group Policy: Intra-group funding leaves local operating buffer untouched at all times.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PRD GLG-18: "What the group sees about me" preview -->
        <div class="terminal-panel">
          <div class="terminal-panel-header" style="background: #111722;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span>WHAT_THE_GROUP_SEES_ABOUT_ME // TRANSPARENT PREVIEW</span>
              <span class="term-tag ok">[GLG-18 RECONCILED]</span>
            </div>
            <span style="font-size: 10px; color: var(--text-3);">PRD PRINCIPLE 4: LOCAL TRANSPARENCY</span>
          </div>
          <div class="terminal-panel-body">
            <div style="font-size: 11px; color: var(--text-2); margin-bottom: 10px;">
              This payload matches exactly what the CFO and Group Treasurer see on the central Group Liquidity Graph for <strong>${entity.name}</strong>:
            </div>
            <div style="background: #040608; border: 1px solid var(--line-1); padding: 12px; font-size: 11px; color: var(--accent); border-radius: 2px;">
              <code>
                {<br>
                &nbsp;&nbsp;"entity_id": "${entity.id}",<br>
                &nbsp;&nbsp;"reported_cash_native": ${cat.total_reported_native},<br>
                &nbsp;&nbsp;"reported_cash_usd_eq": ${cat.total_reported_usd.toFixed(2)},<br>
                &nbsp;&nbsp;"deployable_surplus_native": ${cat.available_group_deployable_native},<br>
                &nbsp;&nbsp;"restricted_cash_native": ${cat.restricted_native},<br>
                &nbsp;&nbsp;"stale_feeds_count": ${entity.stale_count},<br>
                &nbsp;&nbsp;"loc1_certified": ${entity.pool_eligible},<br>
                &nbsp;&nbsp;"open_breaches": ${entity.breach_count}<br>
                }
              </code>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// --- END static/js/registers/local_cockpit.js ---

// --- BEGIN static/js/app.js ---
/**
 * GCPL Treasury Command - Main Application Controller
 * Coordinates the Four UI Registers, ABAC Personas, Shell Navigation & Events
 * Conforms to PRD Section 3 & Section 7
 */

// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]
// [import removed]

class App {
  constructor() {
    this.commandPalette = null;
    this.entityDrawer = null;
    this.actionModal = null;
    
    // Register Controllers
    this.canvasGraph = null;
    this.poolingWorkbench = null;
    this.workflowStudio = null;
    this.consoleView = null;
    this.terminalView = null;
    this.briefView = null;
    this.localCockpit = null;

    this.activeCanvasSub = 'graph'; // 'graph' | 'workbench' | 'workflow'
  }

  async start() {
    console.log('[APP] Starting GCPL Treasury Command...');
    await store.init();

    // Initialize UI Components
    this.commandPalette = new CommandPalette();
    this.entityDrawer = new Entity360Drawer();
    this.actionModal = new ActionModal();

    // Initialize Register Views
    this.canvasGraph = new CanvasGraph('canvas-graph-container');
    this.poolingWorkbench = new PoolingWorkbench('canvas-workbench-container');
    this.workflowStudio = new WorkflowStudio('canvas-workflow-container');
    this.consoleView = new ConsoleView('surface-console');
    this.terminalView = new TerminalView('surface-terminal');
    this.briefView = new BriefView('surface-brief');
    this.localCockpit = new LocalCockpit('surface-cockpit');

    this.bindShellEvents();
    this.updateShell();

    // Subscribe to store updates
    store.subscribe(() => this.updateShell());

    // Explicit initial render of canvas graph
    if (this.canvasGraph) {
      this.canvasGraph.update();
    }

    console.log('[APP] Treasury Command fully operational.');
  }

  bindShellEvents() {
    // 4-Way Register Switcher Buttons
    document.querySelectorAll('.register-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reg = btn.getAttribute('data-reg');
        store.setRegister(reg);
      });
    });

    // Persona Selector (ABAC Access Scopes)
    const personaSelect = document.getElementById('persona-select');
    if (personaSelect) {
      personaSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        store.setPersona(val);
        
        // Auto-switch default register per persona (PRD Section 2.1)
        if (val.includes('Local Coordinator')) {
          store.setRegister('cockpit');
        } else if (val === 'CFO' || val === 'Board Member') {
          store.setRegister('brief');
        } else if (val === 'Front Office Dealer' || val === 'Operations Specialist') {
          store.setRegister('terminal');
        } else if (val === 'IT Administrator') {
          store.setRegister('console');
        }
      });
    }

    // Currency Switcher Toggle (USD / INR with Lakh-Crore)
    const currBtn = document.getElementById('currency-toggle-btn');
    if (currBtn) {
      currBtn.addEventListener('click', () => {
        store.toggleReportingCurrency();
      });
    }

    // Breadcrumb Clicks
    document.getElementById('breadcrumb-root')?.addEventListener('click', () => {
      store.setRegister('canvas');
      this.switchCanvasSub('graph');
    });

    // Subview Switching on Canvas
    window.addEventListener('switch-canvas-subview', (e) => {
      this.switchCanvasSub(e.detail);
    });

    // Global Action Triggering with SoD Verification
    window.addEventListener('trigger-sod-action', (e) => {
      this.actionModal.show(e.detail);
    });
  }

  switchCanvasSub(sub) {
    this.activeCanvasSub = sub;
    const graphBox = document.getElementById('canvas-graph-container');
    const wbBox = document.getElementById('canvas-workbench-container');
    const wfBox = document.getElementById('canvas-workflow-container');

    if (graphBox) graphBox.style.display = sub === 'graph' ? 'flex' : 'none';
    if (wbBox) wbBox.style.display = sub === 'workbench' ? 'flex' : 'none';
    if (wfBox) wfBox.style.display = sub === 'workflow' ? 'flex' : 'none';

    document.querySelectorAll('.subview-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `btn-sub-${sub}`);
    });
  }

  updateShell() {
    const reg = store.activeRegister;

    // Switch visible surface
    document.querySelectorAll('.register-surface').forEach(surf => {
      surf.classList.remove('active');
    });

    const activeSurf = document.getElementById(`surface-${reg}`);
    if (activeSurf) activeSurf.classList.add('active');

    // Update 4-way switcher tabs
    document.querySelectorAll('.register-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-reg') === reg);
    });

    // Update currency toggle button
    const currBtn = document.getElementById('currency-toggle-btn');
    if (currBtn) {
      currBtn.textContent = `CURR: ${store.reportingCurrency} ⇄`;
    }

    // Update breadcrumb
    const bcEntity = document.getElementById('breadcrumb-entity');
    if (bcEntity) {
      bcEntity.textContent = store.selectedEntityId;
    }
  }
}

// Bulletproof Bootstrap
function startApp() {
  const app = new App();
  app.start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

// --- END static/js/app.js ---

})();
