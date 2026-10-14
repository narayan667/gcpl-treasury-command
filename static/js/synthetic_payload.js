export const DEFAULT_DATASET = {
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
